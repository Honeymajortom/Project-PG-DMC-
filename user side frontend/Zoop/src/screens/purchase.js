import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

const Purchase = () => {
    return(
        <View style={styles.container}>
            <Text>Purchase</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:16,
    },
})




export default Purchase;