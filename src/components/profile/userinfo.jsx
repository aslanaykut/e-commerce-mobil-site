//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constans';
import {AppColors} from '../../theme/colors';

// create a component
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user.jpeg')}
        style={{
          width: width * 0.3,
          height: width * 0.3,
          resizeMode: 'contain',
          alignSelf: 'center',
          borderRadius: 1000,
        }}
      />
      <Text style={{fontSize: 18, fontWeight: '800', marginVertical: 10}}>
        FALKEN
      </Text>
      <Text style={{fontSize: 14, fontWeight: '400', color: AppColors.GRAY}}>
        HS01
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default UserInfo;
