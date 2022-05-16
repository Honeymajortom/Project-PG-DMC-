import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from './src/screens/OnBoard';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';


const Stack = createStackNavigator();




const App = () => {

  return (
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName="Splash">
  //     <Stack.Screen
  //       name="Splash"
  //       options={{animationEnabled: false, header: () => null}}
  //       component={SplashScreen}
  //     />
      
  //      <Stack.Screen
  //       name="Home"
  //       options={{animationEnabled: false, header: () => null}}
  //       component={HomeScreen}
  //     />
      
      
  //   </Stack.Navigator>
  // </NavigationContainer>
  <>
    
    <OnBoard/>
  </>
    
  )
}

export default App