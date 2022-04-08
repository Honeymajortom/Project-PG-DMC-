import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({placeholder, keyboardType, onChangeText}) => {
  const kt = keyboardType ? keyboardType : 'default';
  return (
    <View>
      <TextInput
        onChangeText={text => {
          if (onChangeText) {
            onChangeText(text);
          }
        }}
        keyboardType={kt}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#eae2b7',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});

export default Input;