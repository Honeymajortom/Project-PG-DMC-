import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors'

const data = [
  {
    title: 'Keep track of your expenses',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ac faucibus lectus metus.',
    image: require('../assets/images/paisaOnboard3.png'),
    
  },
  {
    title: 'Split Bills with your friends the easy way',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ac faucibus lectus metus.',
    image: require('../assets/images/paisaOnboard2.png'),
    
  },
  {
    title: 'Manage your budget effortlessly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ac faucibus lectus metus.',
    image: require('../assets/images/paisaOnboard1.png'),
  }
];



const OnBoard = () => {


const [showOnBoard, setShowOnBoard] = useState(false)

const onDone = () => {
  setShowOnBoard(true);
};
const onSkip = () => {
  setShowOnBoard(true);
};

const RenderItem = ({item}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: item.backgroundColor,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 100,
      }}>
      
      <Image
        style={styles.introImageStyle}
        source={item.image} />
      <Text style={styles.introTitleStyle}>
        {item.title}
      </Text>
      <Text style={styles.introTextStyle}>
        {item.text}
      </Text>
    </View>
  )
}
return (
  <>
    {showOnBoard ? (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            React Native App Intro Slider using AppIntroSlider
          </Text>
          <Text style={styles.paragraphStyle}>
            This will be your screen when you click Skip
            from any slide or Done button at last
          </Text>
          <Button
            style={styles.buttonStyle}
            title="Show Intro Slider again"
            onPress={() => setShowOnBoard(false)}
          />
        </View>
      </SafeAreaView>
    ) : (
      <AppIntroSlider
        data={data}
        renderItem={RenderItem}
        onDone={onDone}
        showSkipButton={true}
        onSkip={onSkip}
        bottomButton
      />
    )}
  </>
);
}

export default OnBoard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 300,
    height: 300,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  introTitleStyle: {
    fontSize: 32,
    color: '#718BED',
    textAlign: 'center',
    marginBottom: -160,
    fontWeight: 'bold',
    paddingHorizontal: 40,
  },
  buttonStyle: {
    color: '#718BED'
  }


})