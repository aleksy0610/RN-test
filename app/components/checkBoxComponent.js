import React from 'react';
import { View } from 'react-native';
import CheckBox from 'react-native-check-box';
import { colors } from '../theme';

function CheckBoxComponent (props) {
  const { isChecked, setIsChecked } = props;
  return (
    <View>
      <CheckBox
        {...props}
        style={{ flex: 1 }}
        onClick={() => setIsChecked(!isChecked)}
        isChecked={isChecked}
        uncheckedCheckBoxColor={colors.borderColor}
      />
    </View>
  );
}

export default CheckBoxComponent