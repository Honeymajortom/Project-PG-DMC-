import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import OnboardingScreen from './src/screens/OnboardingScreen'
import LoginScreen from './src/screens/LoginScreen'

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
      >
        <AppStack.Screen name="Onboarding" component={OnboardingScreen}></AppStack.Screen>
        <AppStack.Screen name="Login" component={LoginScreen}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default App
