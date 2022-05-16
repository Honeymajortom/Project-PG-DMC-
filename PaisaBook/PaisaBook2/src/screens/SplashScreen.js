import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Logo from '../assets/images/paisa.png'
import colors from '../assets/colors/colors'

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Home');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.root}>
      <Image source={Logo}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
});

export default SplashScreen;