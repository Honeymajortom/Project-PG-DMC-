import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import Home from './src/screens/home';
import Cart from './src/screens/cart';
import MenuDetails from './src/screens/menuDetails';
import Label from './src/components/Label';
import Button from './src/components/Button';
import Purchase from './src/screens/purchase';
import Profile from './src/screens/profile';
import Orderhistory from './src/screens/orderhistory';
import Splash from './src/screens/splash';
// create a navigation stack
// to switch between the screens
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            statusBarHidden: true,
            headerShown: false,
           
          })}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Purchase" component={Purchase} />
        <Stack.Screen name="MenuDetails" component={MenuDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Orderhistory" component={Orderhistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;