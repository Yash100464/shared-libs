import { useState } from 'react';
import { Alert, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { flatListData, sectionListData } from './ListRenderItem/data';
import {
  Card,
  FlatListView,
  FloatingButton,
  PartialRoundedButton,
  RectangleButton,
  RoundedButton,
  SectionListView,
  TextField,
  TextFieldWithRightIcon,
} from '../../shared';
import {
  renderFlatlistItem,
  renderSectionHeader,
  renderSectionItem,
} from './ListRenderItem';
import { useTheme } from '@NxDemo/themeContext';
const Home = (props: any) => {
  const [isTextFieldFocused, setIsTextFieldFocus] = useState(false);
  const [isPasswordVissible, setPasswordVissible] = useState(false);
  const [text, setText] = useState('');
  const { theme, toggleTheme } = useTheme();

  const onTextFieldFocus = () => {
    setIsTextFieldFocus(true);
  };

  const onTextFieldBlur = () => {
    setIsTextFieldFocus(false);
  };

  const onRightIconPress = () => {
    setPasswordVissible(!isPasswordVissible);
  };

  const onClearIconPress = () => {
    setText('');
  };
  const onButtonPress = (alertText: string) => {
    Alert.alert(alertText);
  };
  return (
    <ScrollView style={{ backgroundColor: theme.backgroundColor }}>
      <TouchableOpacity onPress={toggleTheme}>
        <Text
          testID="Dark"
          style={[
            styles.themeButtonView,
            { color: theme.textColor, borderColor: theme.textColor },
          ]}
        >
          {theme?.themeType === 'lightTheme' ? 'Dark' : 'Light'}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.heading, { color: theme.textColor }]}>
        Shared Button Components
      </Text>
      <View style={styles.buttonView}>
        <RectangleButton
          title={'Rectangle Button'}
          leftImageSource={require('../../assets/roundedArrowRight.png')}
          rightImageSource={require('../../assets/roundedArrowRight.png')}
          onPress={() => onButtonPress('Rectangle Button Pressed')}
        />
        <View style={{ height: 20 }} />
        <PartialRoundedButton
          title={'Partial Rounded Button'}
          rightImageSource={require('../../assets/roundedArrowRight.png')}
          style={styles.partialRoundedButtonStyle}
          onPress={() => onButtonPress('Partial Rounded Button Pressed')}
        />
        <View style={{ height: 20 }} />
        <RoundedButton
          title={'Rounded Button'}
          leftImageSource={require('../../assets/roundedArrowRight.png')}
          style={styles.roundedButtonStyle}
          onPress={() => Alert.alert('Rounded Button Pressed')}
        />
      </View>
      <FloatingButton
        leftImageSource={require('../../assets/roundedArrowRight.png')}
        onPress={() => Alert.alert('Floating Button Pressed')}
      />
      <Text style={styles.heading}>Shared TextInput Components</Text>
      <View style={styles.textInputView}>
        <TextField
          placeholder={'BasicTextField'}
          onFocus={onTextFieldFocus}
          onBlur={onTextFieldBlur}
          style={isTextFieldFocused && styles.borderColor}
        />
        <View style={{ height: 20 }} />
        <TextField placeholder={'NonEditableTextField'} isEditable={false} />
        <View style={{ height: 20 }} />
        <TextField />
        <View style={{ height: 20 }} />
        <TextFieldWithRightIcon
          placeholder={'Password'}
          isActionAvailable={true}
          passwordVissible={isPasswordVissible}
          onIconPress={onRightIconPress}
          iconImage={
            !isPasswordVissible
              ? require('../../assets/eye.png')
              : require('../../assets/eyeSlash.png')
          }
        />
        <View style={{ height: 20 }} />
        <TextFieldWithRightIcon
          placeholder={'Clear Text'}
          isActionAvailable={text && true}
          onIconPress={onClearIconPress}
          iconImage={require('../../assets/clearIcon.png')}
          value={text}
          onChangeText={setText}
        />
      </View>
      <View style={{ height: 20 }} />

      <Text style={styles.heading}>Shared Flatlist Components</Text>
      <FlatListView data={flatListData} renderItem={renderFlatlistItem} />

      <Text style={styles.heading}>Shared SectionList Components</Text>
      <SectionListView
        data={sectionListData}
        renderItem={renderSectionItem}
        renderSectionHeader={renderSectionHeader}
      />

      <Text style={styles.heading}>Shared Card Components</Text>
      <Card
        cardTitle={'Product Name'}
        price={'$4.00'}
        description={'Product Descriptionddddddd'}
        cardImg={
          'https://fastly.picsum.photos/id/85/1280/774.jpg?hmac=h_HHpvfhMmLP6uOSrHS7HSlXVRuMKfBbc8HFKd1Acv4'
        }
        onCardPress={() => onButtonPress('Card Pressed')}
      />

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default Home;
