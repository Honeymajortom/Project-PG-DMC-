import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    StatusBar,
    
  } from 'react-native';
  import colors from '../assets/colors/colors'

const Home = () => {
  return (
    <SafeAreaView>
        <Text style={styles.text}>Bloopers</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  text:{

    fontSize: 44,
    color: colors.black,
    textAlign: 'center',
    fontFamily:'OpenSans-ExtraBold',
    marginHorizontal: 60,
    marginTop: 60,
  },
})