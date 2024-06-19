import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    height: 50,
  },
  rightArrow: {
    height: 20,
    width: 20,
  },
  imageStyle: {
    height: 30,
    width: 30,
  },
  leftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  middleContainer: {
    flex: 0.99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    height: 30,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
  },
  sectionTextStyle: {
    fontSize: 20,
    fontWeight: 'bold', 
    marginLeft: 20,
  },
  itemContainer: {
    height: 25,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 20,
  },
});
