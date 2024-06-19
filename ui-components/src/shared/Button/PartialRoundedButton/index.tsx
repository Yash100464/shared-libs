import { BaseButton } from '../BaseButton';
interface PartialButtonProps {
  onPress?: () => void;
  title?: string;
  style?: any;
  textStyle?: any;
  leftImageSource?: any;
  rightImageSource?: any;
}

export const PartialRoundedButton = (props: PartialButtonProps) => {
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
