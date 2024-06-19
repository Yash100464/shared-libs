import { render, fireEvent } from '@testing-library/react-native';
import {RectangleButton} from '../../../index';
describe('RectangleButton', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<RectangleButton title="Click Me" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
