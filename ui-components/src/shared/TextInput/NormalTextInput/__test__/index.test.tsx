import { render, fireEvent } from '@testing-library/react-native';
import { TextField } from '../../../index';

describe('TextField', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<TextField placeholder="Enter text" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
