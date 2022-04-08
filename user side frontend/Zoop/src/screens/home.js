import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { useEffect,useState } from 'react'
import ProductList from './productList'
import { getProducts } from '../service/product'

const Home = () => {
    const [products, setProducts] = useState('')

    useEffect(() =>{
        loadProducts()
    }, [])

    const loadProducts = async () => {
        const result = await getProducts()
        if(result['status'] === 'success'){
            console.log("Result",result)
            setProducts(result['data'])
        }
    }

    return(
        <View style={styles.container}>
            <ProductList products={products}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:16,
    },
    
})

export default Home;