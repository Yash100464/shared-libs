import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import network, { apiClient, setBaseURL } from './index';
import { ErrorMessages } from './errors';
const mock = new MockAdapter(apiClient);

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {
    console.log('error');
  });
});

afterAll(() => {
  console.error.mockRestore();
});

describe('Network Library', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should make a GET request successfully', async () => {
    const mockData = {
      completed: false,
      id: 1,
      title: 'delectus aut autem',
      userId: 1,
    };
    mock.onGet('/todos/1').reply(200, mockData);

    const response = await network.get('/todos/1');

    expect(response.data).toEqual(mockData);
  });

  it('should handle GET request error', async () => {
    mock.onGet('/todos/1').reply(404);

    try {
      await network.get('/todos/1');
    } catch (error) {
      expect(error).toEqual(ErrorMessages.NOT_FOUND);
    }
  });

  it('should make a POST request successfully', async () => {
    const mockData = { id: 101, key: 'value' };
    mock.onPost('/posts', { key: 'value' }).reply(200, mockData);

    const response = await network.post('/posts', { key: 'value' });

    expect(response.data).toEqual(mockData);
  });

  it('should handle POST request error', async () => {
    mock.onPost('/posts').reply(500);

    try {
      await network.post('/posts', { key: 'value' });
    } catch (error) {
      expect(error).toEqual(ErrorMessages.INTERNAL_SERVER_ERROR);
    }
  });

  it('should make a PUT request successfully', async () => {
    const mockData = { id: 1, key: 'value' };
    mock.onPut('/posts/1', { key: 'value' }).reply(200, mockData);

    const response = await network.put('/posts/1', { key: 'value' });

    expect(response.data).toEqual(mockData);
  });

  it('should handle PUT request error', async () => {
    mock.onPut('/posts/1').reply(500);

    try {
      await network.put('/posts/1', { key: 'value' });
    } catch (error) {
      expect(error).toEqual(ErrorMessages.INTERNAL_SERVER_ERROR);
    }
  });

  it('should handle PUT request error with 403 status', async () => {
    mock.onPut('/posts/1').reply(403);

    try {
      await network.put('/posts/1', { key: 'value' });
    } catch (error) {
      expect(error).toEqual(ErrorMessages.FORBIDDEN);
    }
  });

  it('should make a DELETE request successfully', async () => {
    const mockData = {};
    mock.onDelete('/posts/1', { key: 'value' }).reply(200, mockData);

    const response = await network.del('/posts/1', {});

    expect(response.data).toEqual(mockData);
  });

  it('should handle DELETE request error', async () => {
    mock.onDelete('/posts/1').reply(500);

    try {
      await network.del('/posts/1', { key: 'value' });
    } catch (error) {
      expect(error).toEqual(ErrorMessages.INTERNAL_SERVER_ERROR);
    }
  });
  it('should handle DELETE request error with 401 status', async () => {
    mock.onDelete('/posts/1').reply(401);

    try {
      await network.del('/posts/1');
    } catch (error) {
      expect(error).toEqual(ErrorMessages.UNAUTHORIZED);
    }
  });

  it('should handle default case for error response', async () => {
    const customMessage = 'Custom Error Message';
    mock.onGet('/path/to/resource').reply(404, { message: customMessage });

    try {
      await network.get('/path/to/resource');
    } catch (error) {
      expect(error).not.toEqual(customMessage);
      expect(console.error).not.toHaveBeenCalledWith(
        `Error: ${customMessage}`,
        expect.anything()
      );
    }
  });

  it('should handle unexpected error without response', async () => {
    mock.onGet('/posts/1').reply(() => {
      throw new Error('Unexpected error');
    });

    try {
      await network.get('/posts/1');
    } catch (error) {
      expect(error).toEqual('Unexpected error');
    }
  });

  it('should allow setting a new baseURL', () => {
    setBaseURL('');
    expect(axios.defaults.baseURL).toBe(undefined);
  });

  it('should handle DELETE request error with network error', async () => {
    mock.onDelete('/posts/1').reply(400);

    try {
      await network.del('/posts/1');
    } catch (error) {
      expect(error).toEqual(ErrorMessages.BAD_REQUEST);
    }
  });

  it('should handle error responses correctly', async () => {
    mock.onGet('/todos/1').reply(300);
    try {
      await network.get('/todos/1');
    } catch (error) {
      expect(error).not.toEqual('Network Error');
    }
  });
});
