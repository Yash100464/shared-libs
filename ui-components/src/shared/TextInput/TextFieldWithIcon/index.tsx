import { BaseTextField } from '../BaseTextInput';

interface TextFieldWithIconProps {
  value?: string;
  onChangeText?: () => void;
  placeholder?: string;
  style?: any;
  passwordVissible?: boolean;
  isEditable?: boolean;
  isActionAvailable?: boolean;
  onIconPress?: () => void;
  iconImage?: any;
  selectTextOnFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TextFieldWithRightIcon = (props: TextFieldWithIconProps) => {
  const {
    value,
    onChangeText,
    placeholder,
    style,
    passwordVissible,
    isActionAvailable = false,
    isEditable = true,
    onIconPress,
    iconImage,
    selectTextOnFocus = false,
    onFocus,
    onBlur,
  } = props;
  return (
    <BaseTextField
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={style}
      isEditable={isEditable}
      selectTextOnFocus={selectTextOnFocus}
      onFocus={onFocus}
      onBlur={onBlur}
      passwordVissible={passwordVissible}
      onIconPress={onIconPress}
      isActionAvailable={isActionAvailable}
      iconImage={iconImage}
    />
  );
};
