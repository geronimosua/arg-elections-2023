import { StyleSheet } from 'react-native';
import { Theme } from './Theme';

export const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: Theme.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
