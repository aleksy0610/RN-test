import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, Platform } from 'react-native';
import React, { useState } from 'react';

import { borderRadius, paddingSize, sizes, fontSize } from '../constants/Layout';
import { colors } from '../theme';

function DropDownComponent(props) {
  const { title, placeHolder, style, options, zIndex, onChangeItem } = props;

  return (
    <View style={{ flex: 1, ...style }}>
      <Text style={{
        fontSize: fontSize.medium,
        color: colors.textColor,
        fontWeight: '600',
        paddingTop: paddingSize.container,
        paddingBottom: paddingSize.item
      }}>{title}</Text>
      <View style={{
        ...(Platform.OS !== 'android' && {
          zIndex: 10
        })
      }}>
        <DropDownPicker
          items={
            options.map(item => ({
              label: item,
              value: item
            }))
          }
          zIndex={zIndex}
          placeholder={placeHolder}
          containerStyle={{
            height: sizes.inputBox
          }}
          placeholderStyle={{
            color: colors.placeHolder,
          }}
          labelStyle={{
            fontSize: fontSize.medium,
            fontWeight: '600',
            color: colors.textColor,
            borderRadius: borderRadius.button
          }}
          style={{
            backgroundColor: colors.inputBackground,
            border: 'none',
            borderColor: colors.inputBackground,
          }}
          onChangeItem={item => onChangeItem(item)}

          dropDownStyle={{
            backgroundColor: colors.inputBackground,
            fontSize: fontSize.medium,
            borderColor: colors.inputBackground,
            borderRadius: borderRadius.button,
            marginTop: 2,
          }}
        />
      </View>
    </View>
  )
}

export default DropDownComponent;