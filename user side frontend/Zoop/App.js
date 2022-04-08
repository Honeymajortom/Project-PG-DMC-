import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Signin from './src/screens/signin'
import Signup from './src/screens/signup'
import Home from './src/screens/home'
import Cart from './src/screens/cart'
import ProductList from './src/screens/productList'



const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="ProductList" component={ProductList}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
