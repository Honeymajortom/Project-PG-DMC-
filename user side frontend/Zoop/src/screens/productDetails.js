import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

const ProductDetails = ({route, navigation}) => {
    const {id} = route.params
    return(
        <View style={styles.container}>
            <Text>ProductDetails of {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:16,
    },
})

export default ProductDetails