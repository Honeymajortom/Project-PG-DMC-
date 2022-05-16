import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
          <Image 
          style={{
                width:100,
                height:100,
                resizeMode:'contain',
              }}
            source={{
            
                uri:"https://links.papareact.com/gzs",
            }}
          />

          <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    text: {
        color:"blue",
    },
})