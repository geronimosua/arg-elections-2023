import { View, StyleSheet } from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/globalStyles';
import { Theme } from '../../styles/Theme';

interface Props {
  children: React.ReactNode;
}

const Box: React.FC<Props> = ({ children }) => (
  <View style={style.container}>{children}</View>
);

const style = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: Theme.white,
    ...globalStyles.shadow,
  },
});

export default Box;
