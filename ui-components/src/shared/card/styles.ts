import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView: {
    width: 300,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgContainer: {
    marginVertical: 20,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  contentContainer: {
    width: 160,
    marginVertical: 20,
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginRight: 10,
    color: 'grey',
  },
});
