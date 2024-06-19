import { BaseButton } from '../BaseButton';

interface RoundedButtonProps {
  onPress?: () => void;
  title?: string;
  style?: any;
  textStyle?: any;
  leftImageSource?: any;
  rightImageSource?: any;
}

export const RoundedButton = (props: RoundedButtonProps) => {
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
      style={style}
      onPress={onPress}
      textStyle={textStyle}
    />
  );
};
