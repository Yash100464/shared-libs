import { render, fireEvent } from '@testing-library/react-native';
import {
  TextFieldWithRightIcon,
} from '../../../index';

describe('TextFieldWithRightIcon', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<TextFieldWithRightIcon placeholder="Enter text" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
