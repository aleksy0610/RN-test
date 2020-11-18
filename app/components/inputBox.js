import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { colors } from '../theme';
import { borderRadius, paddingSize, sizes, fontSize } from '../constants/Layout';

function InputBox (props) {
  const { title, placeholder, style, value, onChangeText } = props;
  return (
    <View style={{ flex: 1, ...style }}>
      <Text style={{
        fontSize: fontSize.medium,
        color: colors.textColor,
        fontWeight: '600',
        paddingBottom: paddingSize.item
      }}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          backgroundColor: colors.inputBackground,
          borderRadius: borderRadius.button,
          paddingHorizontal: paddingSize.button,
          height: sizes.inputBox,
          fontSize: fontSize.medium,
          fontWeight: '600',
          color: colors.textColor
        }} 
        placeholder={placeholder} />
    </View>
  )
};

export default InputBox;