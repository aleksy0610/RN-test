import React, { Fragment, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux';

import { sendData } from '../../redux/actions';
import Routes from "../../routes";
import {
  CheckBoxComponent,
  MainContainer,
  ItemContainer,
  InputBox,
  DropDownComponent
} from '../../components';
import GlobalStyle from '../../constants/GlobalStyle';
import { sizes, paddingSize } from "../../constants/Layout";
import { colors } from '../../theme';
import styles from './styles';

const title = '';
const description = 'Do you have, or have you ever had, \n any of the following?';

const FourthScreen = ({ navigation, sendDataHandler, allData }) => {
  const checkList = [
    'Swelling of the Neck',
    'Frequent Laryngitis',
    'Epilepsy',
    'A brain and central nervous system disease',
    'Prostatitis',
    'None of the Above'
  ];

  const [isChecked, setIsChecked] = useState({});

  const sendAllData = () => {
    const sendingData = {
      ...allData,
      isChecked
    };
    sendDataHandler(sendingData).then(data => {
      alert(JSON.stringify(data));
    }).catch(error => {
      alert(error);
    });
  }
  return (
    <MainContainer 
      title={title}
      description={description}
      back={() => navigation.navigate(Routes.ThirdScreen)}
      next={()=> sendAllData()}>
      {
        checkList.map(item => (
          <View key={item} style={{ marginBottom: paddingSize.item }}>
            <ItemContainer height={sizes.itemSize}>
              <CheckBoxComponent
                isChecked={isChecked[item]}
                checkBoxColor={colors.red}
                setIsChecked={(e) => {
                  setIsChecked (prev => ({
                    ...prev,
                    [item]: e
                  }))
                }}
                rightText={item}
                rightTextStyle={GlobalStyle.itemText}
              />
            </ItemContainer>
          </View>
        ))
      }
    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    allData: state.data
  };
};

const mapDispatchToProps = ({
  sendDataHandler: sendData,
})
export default connect (mapStateToProps, mapDispatchToProps)(FourthScreen);
