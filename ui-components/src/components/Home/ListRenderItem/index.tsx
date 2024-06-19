import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const renderFlatlistItem = (item: any) => {
  return (
    <TouchableOpacity
      style={styles.viewStyle}
      onPress={() => Alert.alert('Flatlist Pressed')}
    >
      {item?.item?.img && (
        <View style={styles.leftContainer}>
          <Image source={item?.item?.img} style={styles.imageStyle} />
        </View>
      )}
      <View style={styles.middleContainer}>
        <Text style={styles.textStyle}>{item?.item?.title}</Text>
      </View>

      <View style={styles.rightContainer}>
        <Image
          source={require('../../../assets/arrowRight.png')}
          style={styles.rightArrow}
        />
      </View>
    </TouchableOpacity>
  );
};

export const renderSectionHeader = ({ section }: any) => (
  <View style={styles.headerContainer}>
    <Text style={styles.sectionTextStyle}>{section?.title}</Text>
  </View>
);

export const renderSectionItem = ({ item }: any) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );
};

