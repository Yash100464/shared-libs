import { render, fireEvent } from '@testing-library/react-native';
import {PartialRoundedButton} from '../../../index';
describe('PartialRoundedButton', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<PartialRoundedButton title="Click Me" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
