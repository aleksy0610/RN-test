import React from "react";
import { StyleSheet } from "react-native";
import { paddingSize, sizes, borderRadius, fontSize } from "../../constants/Layout";
import { colors } from '../../theme';

const styles = StyleSheet.create({
  add: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSize.medium,
    color: colors.primaryColor
  }
});

export default styles;
