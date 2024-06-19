import { render, fireEvent } from '@testing-library/react-native';
import {BaseButton,BaseButtonLeftImageTestID,BaseButtonRightImageTestID} from '../../../index';

describe('BaseButton', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<BaseButton title="Click Me" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<BaseButton title="Click Me" onPress={onPressMock} />);
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders left and right images correctly', () => {
    const leftImageSource = { uri: 'left-image-url' };
    const rightImageSource = { uri: 'right-image-url' };
    const { getByTestId } = render(
      <BaseButton
        title="Click Me"
        leftImageSource={leftImageSource}
        rightImageSource={rightImageSource}
      />
    );
    expect(getByTestId(BaseButtonLeftImageTestID)).toBeTruthy();
    expect(getByTestId(BaseButtonRightImageTestID)).toBeTruthy();
  });
});
