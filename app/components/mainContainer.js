import React from 'react';
import { StatusBar, StyleSheet, Image, Text, View, ScrollView } from 'react-native';

import { colors } from '../theme';
import Images from '../constants/Images';
import SafeAreaView from 'react-native-safe-area-view';
import { paddingSize, iconSize, fontSize, borderRadius } from '../constants/Layout';
import { TouchableOpacity } from 'react-native-gesture-handler';

function MainContainer(props) {
  const { children, next, back, title, description } = props;
  return (
    <SafeAreaView style={[styles.container, { paddingTop: StatusBar.currentHeight || 0 }]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={back}>
            <Image source={Images.left_icon} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.mainContainerBG} />
            <View style={{ flex: 1, marginBottom: paddingSize.medium }}>
              {children}
            </View>
            <TouchableOpacity style={styles.nextButton} onPress={next}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    flex: 1
  },
  mainContainer: {
    marginTop: paddingSize.large,
    flex: 1,
    height: '100%'
  },
  nextButtonText: {
    color: 'white',
    fontSize: fontSize.xmedium,
    fontWeight: 'bold',
    paddingVertical: paddingSize.button,
    textAlign: 'center'
  },
  nextButton: {
    backgroundColor: colors.red,
    marginHorizontal: paddingSize.container,
    borderRadius: borderRadius.button,
    marginBottom: paddingSize.medium,
    marginTop: 'auto'
  },
  mainContainerBG: {
    backgroundColor: colors.grey,
    marginTop: paddingSize.medium,
    borderTopRightRadius: borderRadius.medium,
    borderTopLeftRadius: borderRadius.medium,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  backIcon: {
    margin: paddingSize.container,
    height: iconSize.medium,
    resizeMode: 'contain'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: fontSize.title,
    lineHeight: 24,
    fontWeight: 'bold'
  },
  description: {
    color: 'white',
    textAlign: 'center',
    fontSize: fontSize.medium,
    lineHeight: 22,
    paddingTop: paddingSize.small,
    fontWeight: '500'
  },
  titleContainer: {
    paddingTop: paddingSize.sLarge
  }
});

export default MainContainer