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
import { setThirdScreenData } from '../../redux/actions';
import { sizes, paddingSize } from "../../constants/Layout";
import { colors } from '../../theme';
import styles from './styles';

const title = 'What are your symptoms?';
const description = 'This will help to calculate the right \n protocol for you';
const startDate = [
  'Mg',
  'Mg1',
  'Mg2'
];
const severe = [
  'Daily',
  'Weekly',
  'Monthly'
];

const initData = {
  symptoms: '',
  startDate: '',
  severe: ''
};

const ThirdScreen = ({ navigation, setThirdScreenDataHandler }) => {
  const [idChecked, setIsChecked] = useState(false);
  const [ screenData, setScreenData ] = useState([initData]);
  
  const addThirdScreenData = () => {
    setScreenData(prevScreenData => [...prevScreenData, initData]);
  };
  const updateField = (index, field, value) => {
    const newScreenData = [...screenData];
    newScreenData.splice(index, 1, { ...screenData[index], [field]: value })
    setScreenData(newScreenData);
  };

  const moveToNextScreen = () => {
    setThirdScreenDataHandler(idChecked ? "none" : screenData);
    navigation.navigate(Routes.FourthScreen);
  }
  return (
    <MainContainer
      title={title}
      description={description}
      next={() => moveToNextScreen()}
      back={() => navigation.navigate(Routes.SecondScreen)}>
      <ItemContainer height={sizes.itemSize}>
        <CheckBoxComponent
          isChecked={idChecked}
          checkBoxColor={colors.red}
          setIsChecked={setIsChecked}
          rightText={'No, I don’t have any symptoms'}
          rightTextStyle={GlobalStyle.itemText}
        />
      </ItemContainer>
      { !idChecked &&
        screenData.map((data, index) => (
          <ItemContainer
            key={`$third-${index}`}
            style={{ marginTop: paddingSize.item, zIndex: 5000 - index }} >
            <InputBox
              title='Symptoms'
              value={data.symptoms}
              onChangeText={value => updateField(index, 'symptoms', value)}
              placeholder='Type...'>
            </InputBox>
            <DropDownComponent
              options={startDate}
              title='When did it start?'
              onChangeItem={value => updateField(index, 'startDate', value.value)}
              placeHolder='Select date' />
            <DropDownComponent
              options={severe}
              onChangeItem={value => updateField(index, 'severe', value.value)}
              title='How severe is it?'
              placeHolder='Select' />
          </ItemContainer>
        ))
      }
      <TouchableOpacity onPress={() => addThirdScreenData()}>
        <ItemContainer
          height={sizes.itemSize}
          style={{ marginTop: paddingSize.item }} >
          <Text style={styles.add}>+   Symptoms123</Text>
        </ItemContainer>
      </TouchableOpacity>

    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    allData: state.data
  };
};

const mapDispatchToProps = ({
  setThirdScreenDataHandler: setThirdScreenData
})

export default connect (mapStateToProps, mapDispatchToProps)(ThirdScreen)