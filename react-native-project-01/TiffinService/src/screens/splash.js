import React from 'react'
import {Alert, StyleSheet, Text, TextInput, View, TouchableOpacity,Image} from 'react-native';
import Button from '../components/Button';
import Signin from '../screens/signin';
import Signup from '../screens/signup';


const Splash = ({navigation}) => {




  return (
    <View style={styles.container}>


      <Image style={styles.image} source={require('../assets/noodles.png')} />
      <Text style={styles.hero}>Bento</Text>


      <View style={styles.button}>
      <TouchableOpacity>
        <Button title="Signin" 
        
        onPress={() => {
      navigation.navigate('Signin');
         }}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Button title="Signup" 
              onPress={() => {
               navigation.navigate('Signup');
                  }}/> 
      </TouchableOpacity>
      </View>
          
    </View>
    
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor:'#fcbf49',
    },
    button: {
      paddingTop:150,

    },
    image: {
      marginTop:90,
      marginLeft: 30,
      width: 350,
      height: 350,
      borderRadius: 10,
    },
    hero: {
      fontSize: 80,
      marginLeft: 110,
      marginTop: -70,
      fontWeight: 'bold',
      fontFamily: "Poppins",
      color:'#d62828',
    },
    
  });

export default Splash