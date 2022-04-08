import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuList from './menuList';
import Cart from './cart';
import Profile from './profile';
import Orderhistory from './orderhistory';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <Tab.Navigator style={styles.nav}>


     <Tab.Screen
        name="Menus"
        component={MenuList}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/menu.png')}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/cart.png')}
              color={color}
              size={size}
            />
          ),
        }}
      />

       <Tab.Screen
        name="Orderhistory"
        component={Orderhistory}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/orderhistory.png')}
              color={color}
              size={size}
            />
          ),
        }}
      /> 


       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/profile.png')}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}; 
const styles = StyleSheet.create({
  nav:{
    backgroundColor: '#fcbf49'
  }
})

export default Home