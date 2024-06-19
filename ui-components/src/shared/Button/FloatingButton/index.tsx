import { BaseButton } from '../BaseButton';
import { styles } from './styles';

interface FloatingButtonProps {
  onPress?: () => void;
  title?: string;
  style?: any;
  textStyle?: any;
  leftImageSource?: any;
  rightImageSource?: any;
}

export const FloatingButton = (props: FloatingButtonProps) => {
  const {
    onPress,
    title,
    style,
    textStyle,
    leftImageSource,
    rightImageSource,
  } = props;
  return (
    <BaseButton
      title={title}
      leftImageSource={leftImageSource}
      rightImageSource={rightImageSource}
      style={[styles.button,style]}
      onPress={onPress}
      textStyle={textStyle}
    />
  );
};