import { TouchableOpacity, Text, Image, View } from 'react-native';
import { styles } from './styles';

interface CardProps {
  cardImg?: any;
  onCardPress?: () => void;
  cardTitle?: string;
  cardStyle?: any;
  titleStyle?: any;
  price?: any;
  priceStyle?: any;
  description?: any;
  descriptionStyle?: any;
  cardImgStyle?: any;
}

export const CardContainerTestID = 'Card:ContainerTestID';
export const CardImageContainerTestID = 'Card:ImageContainerTestID';
export const CardImageTestID = 'Card:ImageTestID';
export const CardContentContainerTestID = 'Card:ContentContainerTestID';
export const CardTitleTestID = 'Card:TitleTestID';
export const CardPriceTestID = 'Card:PriceTestID';
export const CardDescriptionTestID = 'Card:DescriptionTestID';

export const Card = (props: CardProps) => {
  const {
    cardImg,
    onCardPress,
    cardTitle,
    cardStyle,
    titleStyle,
    priceStyle,
    price,
    descriptionStyle,
    description,
    cardImgStyle,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.cardView, cardStyle]}
      onPress={onCardPress}
      testID={CardContainerTestID}
    >
      <View testID={CardImageContainerTestID} style={styles.imgContainer}>
        <Image
          source={{
            uri: cardImg,
          }}
          style={[styles.img, cardImgStyle]}
          testID={CardImageTestID}
        />
      </View>
      <View testID={CardContentContainerTestID} style={styles.contentContainer}>
        <Text testID={CardTitleTestID} style={[styles.titleText, titleStyle]}>{cardTitle}</Text>
        <Text testID={CardPriceTestID} style={[styles.price, priceStyle]}>{price}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.price, descriptionStyle]}
          testID={CardDescriptionTestID}
        >
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
