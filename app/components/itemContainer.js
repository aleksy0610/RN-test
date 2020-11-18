import React from 'react';
import { View } from 'react-native';
import { paddingSize, sizes, borderRadius } from "../constants/Layout";
function ItemContainer(props) {
  const { children, height, style } = props;
  return (
    <View style={{
      marginHorizontal: paddingSize.container,
      backgroundColor: 'white',
      justifyContent: 'center',
      borderRadius: borderRadius.button,
      padding: paddingSize.container,
      ...style
    }}>
      {children}
    </View>
  )
};

export default ItemContainer;