//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Input, Button} from '@ui-kitten/components';
import {screenStyle} from '../../styles/screenStyle';
import {width} from '../../utils/constans';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {postRequest} from '../../service/verbs';
import {LOGIN_URL} from '../../service/urls';
import StoreContext from '../../context';

// create a component
const Login = ({navigation}) => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [disableButton, setDisableButton] = useState(false);
  const [isRequreUsername, setUsernameRequre] = useState(true);
  const [isRequrePassword, setPasswordRequre] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {setIsLogin} = useContext(StoreContext);

  const login = () => {
    const form = {
      username: null,
      password: null,
    };
    if (username) {
      form.username = username;
      setUsernameRequre(true);
    } else setUsernameRequre(false);
    if (password) {
      form.password = password;
      setPasswordRequre(true);
    } else setPasswordRequre(false);

    if (password && username) {
      setDisableButton(true);
      postRequest(LOGIN_URL, form)
        .then(response => {
          console.log(response.data);
          setIsLogin(true);
          navigation.goBack();
        })
        .catch(eror => {
          console.log(eror.response);
        })
        .finally(() => {
          setDisableButton(false);
        });
    }
  };

  return (
    <View style={screenStyle.container}>
      <ScrollView>
        <View style={{padding: 20}}>
          <Image
            source={require('../../assets/icon/logo.png')}
            style={{
              width: width * 0.3,
              height: width * 0.2,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>
        <View>
          <Input
            size="large"
            status={isRequreUsername ? 'basic' : 'danger'}
            caption={!isRequreUsername ? 'Kullanıcı alanı zorunludur' : null}
            style={{marginVertical: 10}}
            value={username}
            label="User Name"
            placeholder="Enter your username"
            onChangeText={nextValue => setUsername(nextValue)}
          />
          <Input
            size="large"
            status={isRequrePassword ? 'basic' : 'danger'}
            caption={!isRequrePassword ? 'Şifre alanı zorunludur' : null}
            style={{marginVertical: 10}}
            value={password}
            label="Password"
            secureTextEntry={secureTextEntry}
            placeholder="Enter your password"
            accessoryRight={
              secureTextEntry ? (
                <EyeSlash
                  size="28"
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              ) : (
                <Eye
                  size="28"
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              )
            }
            onChangeText={nextValue => setPassword(nextValue)}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <Button
            disabled={disableButton}
            onPress={login}
            style={{marginVertical: 10}}
            status="success">
            LOGIN
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
