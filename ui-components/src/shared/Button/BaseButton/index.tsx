import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './styles';

interface BaseButtonProps {
  onPress?: () => void;
  title?: string;
  style?: any;
  textStyle?: any;
  leftImageSource?: any;
  rightImageSource?: any;
}

//testID's
export const BaseButtonContainerTestID = 'BaseButton:ContainerTestID';
export const BaseButtonLeftImageTestID = 'BaseButton:LeftImageTestID';
export const BaseButtonTextTestID = 'BaseButton:TextTestID';
export const BaseButtonRightImageTestID = 'BaseButton:RightImageTestID';

export const BaseButton = (props: BaseButtonProps) => {
  const {
    onPress,
    title,
    style,
    textStyle,
    leftImageSource,
    rightImageSource,
  } = props;
  return (
    <TouchableOpacity accessibilityRole='button' style={[styles.button, style]} onPress={onPress} testID={BaseButtonContainerTestID}>
      {leftImageSource && (
        <Image source={leftImageSource} style={styles.leftImage} testID={BaseButtonLeftImageTestID}/>
      )}
      <Text style={[styles.buttonText, textStyle]} testID={BaseButtonTextTestID} accessibilityLabel={'title'}>{title}</Text>
      {rightImageSource && (
        <Image source={rightImageSource} style={styles.rightImage} testID={BaseButtonRightImageTestID}/>
      )}
    </TouchableOpacity>
  );
};