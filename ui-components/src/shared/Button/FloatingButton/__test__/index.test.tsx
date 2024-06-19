import { render, fireEvent } from '@testing-library/react-native';
import {FloatingButton} from '../../../index';
describe('Floating Button', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<FloatingButton title="Click Me" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
