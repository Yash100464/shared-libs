import { render } from '@testing-library/react-native';
import { RoundedButton } from '../../../index';
describe('RoundedButton', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<RoundedButton title="Click Me" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
