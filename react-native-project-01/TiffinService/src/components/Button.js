import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#6A994E',
    marginVertical: 5,
    borderRadius: 30,
    
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold"
  },
});

export default Button;
