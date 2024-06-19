import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface BaseTextFieldProps {
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

export const BaseTextFieldContainerTestID = 'BaseTextField:ContainerTestID';
export const BaseTextFieldTextInputTestID = 'BaseTextField:TextInputTestID';
export const BaseTextFieldIconTestID = 'BaseTextField:IconTestID';
export const BaseTextFieldActionTestID = 'BaseTextField:ActionTestID';

export const BaseTextField = (props: BaseTextFieldProps) => {
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
    <View testID={BaseTextFieldContainerTestID} style={[styles.textInputContainer, style]}>
      <TextInput
        style={[styles.input]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={passwordVissible}
        editable={isEditable}
        selectTextOnFocus={selectTextOnFocus}
        onFocus={onFocus}
        onBlur={onBlur}
        testID={BaseTextFieldTextInputTestID}
      />

      {isActionAvailable && (
        <TouchableOpacity testID={BaseTextFieldActionTestID} onPress={onIconPress}>
          <Image testID={BaseTextFieldIconTestID} source={iconImage} style={styles.eyeImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};