import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '../assets/paisa.png'

const BGColor = "#4C6DE2"

function SplashScreen() {

    const edges = useSafeAreaInsets();

    const startAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        setTimeout(() =>{

            Animated.sequence([
                Animated.timing(
                    startAnimation,
                    {
                        toValue: 100,
                        useNativeDriver: true
                    }
                )
            ])
        }, 500)

    }, [])

  return (
    <Animated.View style={
        {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: BGColor,
        }
    }>


        <Animated.View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{
                translateY: startAnimation
            }]
        }}>
            <Image source={Logo}></Image>
        </Animated.View>
    </Animated.View>
  )
}

export default SplashScreen