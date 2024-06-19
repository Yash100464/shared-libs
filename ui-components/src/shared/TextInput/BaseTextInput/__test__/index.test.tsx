import { render, fireEvent } from '@testing-library/react-native';
import {
  BaseTextField,
  BaseTextFieldIconTestID,
  BaseTextFieldActionTestID,
} from '../../../index';

describe('BaseTextField', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<BaseTextField placeholder="Enter text" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('calls onChangeText when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <BaseTextField placeholder="Enter text" onChangeText={onChangeTextMock} />
    );

    fireEvent.changeText(getByPlaceholderText('Enter text'), 'new text');
    expect(onChangeTextMock).toHaveBeenCalledWith('new text');
  });

  it('shows the icon when isActionAvailable is true', () => {
    const { getByTestId } = render(
      <BaseTextField
        placeholder="Enter text"
        isActionAvailable
        iconImage={{ uri: 'icon-uri' }}
      />
    );

    expect(getByTestId(BaseTextFieldIconTestID)).toBeTruthy();
  });

  it('calls onIconPress when icon is pressed', () => {
    const onIconPressMock = jest.fn();
    const { getByTestId } = render(
      <BaseTextField
        placeholder="Enter text"
        isActionAvailable
        onIconPress={onIconPressMock}
        iconImage={{ uri: 'icon-uri' }}
      />
    );

    fireEvent.press(getByTestId(BaseTextFieldActionTestID));
    expect(onIconPressMock).toHaveBeenCalled();
  });

  it('handles secureTextEntry and editable props correctly', () => {
    const { getByPlaceholderText } = render(
      <BaseTextField
        placeholder="Enter password"
        passwordVissible
        isEditable={false}
      />
    );

    const input = getByPlaceholderText('Enter password');
    expect(input.props.secureTextEntry).toBe(true);
    expect(input.props.editable).toBe(false);
  });
});
