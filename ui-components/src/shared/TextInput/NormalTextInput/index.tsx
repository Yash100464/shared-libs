import { BaseTextField } from '../BaseTextInput';

interface TextFieldProps {
  value?: string;
  onChangeText?: () => void;
  placeholder?: string;
  style?: any;
  isEditable?: boolean;
  selectTextOnFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TextField = (props: TextFieldProps) => {
  const {
    value,
    onChangeText,
    placeholder,
    style,
    isEditable = true,
    selectTextOnFocus,
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
    />
  );
};
