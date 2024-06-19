import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    paddingVertical: 15,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.3, // Shadow for iOS
    shadowRadius: 2, // Shadow for iOS
  },
});
