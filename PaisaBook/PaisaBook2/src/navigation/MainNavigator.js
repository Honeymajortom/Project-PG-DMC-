import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import OnBoard from '../screens/OnBoard';

const Stack = createStackNavigator();

const MainNavigator = () => {


    const [showOnBoard, setShowOnBoard] = useState(true)

  const handleOnboardFinish = () => {
    setShowOnBoard(false)
  }

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        options={{animationEnabled: false, header: () => null}}
        component={SplashScreen}
      />
      <Stack.Screen
        name="OnBoard"
        options={{animationEnabled: false, header: () => null}}
        component={OnBoard}
        handleDone={handleOnboardFinish} 
      />
       <Stack.Screen
        name="Home"
        options={{animationEnabled: false, header: () => null}}
        component={HomeScreen}
      />
      
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigator