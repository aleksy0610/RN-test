import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux';

import Routes from "../../routes";
import {
  CheckBoxComponent,
  MainContainer,
  ItemContainer,
  InputBox,
  DropDownComponent
} from '../../components';
import { setFirstScreenData } from '../../redux/actions';
import GlobalStyle from '../../constants/GlobalStyle';
import { sizes, paddingSize } from "../../constants/Layout";
import { colors } from '../../theme';
import styles from './styles';

const title = '';
const description = 'Do you take any Medications or \nSupplements?'
const doesItems = [
  'Mg',
  'Mg1',
  'Mg2'
];
const timeItems = [
  'Daily',
  'Weekly',
  'Monthly'
];

const initData = {
  product: '',
  does: '',
  doesType: '',
  time: '',
  date: ''
};

const FirstScreen = ({ navigation, setFirstScreenDataHandler }) => {
  const [idChecked, setIsChecked] = useState(false);
  const [ screenData, setScreenData ] = useState([initData]);
  
  const addFirstScreenData = () => {
    setScreenData(prevScreenData => [...prevScreenData, initData]);
  };
  const updateField = (index, field, value) => {
    const newScreenData = [...screenData];
    newScreenData.splice(index, 1, { ...screenData[index], [field]: value })
    setScreenData(newScreenData);
  };

  const moveToNextScreen = () => {
    setFirstScreenDataHandler(idChecked? "none" : screenData);
    navigation.navigate(Routes.SecondScreen);
  };

  return (
    <MainContainer
      title={title}
      description={description}
      next={() => moveToNextScreen()}>
      <ItemContainer height={sizes.itemSize}>
        <CheckBoxComponent
          isChecked={idChecked}
          checkBoxColor={colors.red}
          setIsChecked={setIsChecked}
          rightText={'No, I don’t take any medications'}
          rightTextStyle={GlobalStyle.itemText}
        />
      </ItemContainer>

      {
        !idChecked &&
        screenData.map((data, index) => (
          <ItemContainer
            key={`first_medications_${index}`}
            style={{ marginTop: paddingSize.item, overFlow: 'visible', zIndex: 5000 - index, position: 'relative' }} >
            <InputBox
              title='Product'
              value={data.product}
              onChangeText={value => updateField(index, 'product', value)}
              placeholder='Type...'>
            </InputBox>
            <View style={styles.componentGroup}>
              <InputBox
                style={{
                  marginRight: paddingSize.item,
                  paddingTop: paddingSize.container
                }}
                title='Does'
                value={data.does}
                onChangeText={value => updateField(index, 'does', value)}
                placeholder='Type...'>
              </InputBox>
              <DropDownComponent
                options={doesItems}
                style={{ marginLeft: paddingSize.item }}
                title=''
                onChangeItem={value => updateField(index, 'doesType', value.value)}
                placeHolder='Select type' />
            </View>
            <View style={styles.componentGroup}>
              <InputBox
                style={{
                  marginRight: paddingSize.item,
                  paddingTop: paddingSize.container
                }}
                value={data.time}
                onChangeText={value => updateField(index, 'time', value)}
                title='Frequency (Times)'
                placeholder='Time...'>
              </InputBox>
              <DropDownComponent
                zIndex={5000 - index}
                options={timeItems}
                style={{ marginLeft: paddingSize.item }}
                title=''
                onChangeItem={value => updateField(index, 'timeType', value.value)}
                placeHolder='Select Day' />
            </View>
          </ItemContainer>
        ))
      }
      <TouchableOpacity onPress={() => addFirstScreenData()}>
        <ItemContainer
          height={sizes.itemSize}
          style={{ marginTop: paddingSize.item }} >
          <Text style={styles.add}>+   Medications</Text>
        </ItemContainer>
      </TouchableOpacity>

    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = ({
  setFirstScreenDataHandler: setFirstScreenData,
})
export default connect (mapStateToProps, mapDispatchToProps)(FirstScreen);