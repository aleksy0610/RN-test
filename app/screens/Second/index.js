import React, { Fragment, useEffect, useState } from "react";
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
import GlobalStyle from '../../constants/GlobalStyle';
import { setSecondScreenData } from '../../redux/actions';
import { sizes, paddingSize } from "../../constants/Layout";
import { colors } from '../../theme';
import styles from './styles';

const title = 'Do you take any Medications?';
const description = '';
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

const duration = [
  'Daily',
  'Weekly',
  'Monthly'
];

const initData = {
  medicationName: '',
  amount: '',
  amountType: '',
  number: '',
  numberType: '',
  duration: '',
  additionalInfo: ''
};

const SecondScreen = ({ navigation, setSecondScreenDataHandler }) => {
  const [idChecked, setIsChecked] = useState(false);
  const [ screenData, setScreenData ] = useState([initData]);
  
  const addSecondScreenData = () => {
    setScreenData(prevScreenData => [...prevScreenData, initData]);
  };

  const moveToNextScreen = () => {
    setSecondScreenDataHandler(idChecked ? "none" : screenData);
    navigation.navigate(Routes.ThirdScreen);
  };

  const updateField = (index, field, value) => {
    const newScreenData = [...screenData];
    newScreenData.splice(index, 1, { ...screenData[index], [field]: value })
    setScreenData(newScreenData);
  };

  return (
    <MainContainer
      title={title}
      description={description}
      next={() => moveToNextScreen()}
      back={() => navigation.navigate(Routes.FirstScreen)}>
      <ItemContainer height={sizes.itemSize}>
        <CheckBoxComponent
          isChecked={idChecked}
          checkBoxColor={colors.red}
          setIsChecked={setIsChecked}
          rightText={'No, I don’t take any medications'}
          rightTextStyle={GlobalStyle.itemText}
        />
      </ItemContainer>
      { !idChecked &&
        screenData.map((data, index) => (
          <ItemContainer
            key={`second-${index}`}
            style={{ marginTop: paddingSize.item }} >
            <InputBox
              title='Medication Name'
              value={data.medicationName}
              onChangeText={value => updateField(index, 'medicationName', value)}
              placeholder='Type your Medication Here'>
            </InputBox>
            <View style={styles.componentGroup}>
              <InputBox
                style={{
                  marginRight: paddingSize.item,
                  paddingTop: paddingSize.container
                }}
                value={data.amount}
                onChangeText={value => updateField(index, 'amount', value)}
                title='Amount'
                placeholder='Type...'>
              </InputBox>
              <DropDownComponent
                options={doesItems}
                style={{ marginLeft: paddingSize.item }}
                title=''
                value={data.amountType}
                onChangeItem={value => updateField(index, 'amountType', value.value)}
                placeHolder='Select type' />
            </View>
            <View style={styles.componentGroup}>
              <InputBox
                style={{
                  marginRight: paddingSize.item,
                  paddingTop: paddingSize.container
                }}
                value={data.number}
                onChangeText={value => updateField(index, 'number', value)}
                title='Number'
                placeholder='Type...'>
              </InputBox>
              <DropDownComponent
                options={timeItems}
                style={{ marginLeft: paddingSize.item }}
                title=''
                value={data.numberType}
                onChangeItem={value => updateField(index, 'numberType', value.value)}
                placeHolder='Select type' />
            </View>
            <DropDownComponent
              options={duration}
              title='Duration'
              value={data.duration}
              onChangeItem={value => updateField(index, 'duration', value.value)}
              placeHolder='Select date' />
            <InputBox
              style={{
                paddingTop: paddingSize.container
              }}
              value={data.additionalInfo}
              onChangeText={value => updateField(index, 'additionalInfo', value)}
              title='Additional Information'
              placeholder='Write more information'>
            </InputBox>
          </ItemContainer>
        ))}
      <TouchableOpacity onPress={() => addSecondScreenData()}>
        <ItemContainer
          height={sizes.itemSize}
          style={{ marginTop: paddingSize.item, zIndex: 0 }} >
          <Text style={styles.add}>+   Symptoms</Text>
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
  setSecondScreenDataHandler: setSecondScreenData,
})
export default connect (mapStateToProps, mapDispatchToProps)(SecondScreen);