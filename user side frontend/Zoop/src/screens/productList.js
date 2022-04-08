import React,{ useEffect,useState } from 'react'
import {StyleSheet,FlatList,View,Text, Image,TouchableOpacity} from 'react-native'
import Label from '../components/Label'
import { getProducts, getProductThumbnail } from '../service/product'


const ProductItem = ({item, navigation}) => {

    // const [image, setImage] = useState();

    // const loadImage = async () => {
    //     const tempImage = await getProductThumbnail(item.menuImage);
    //     setImage(tempImage);
    // }

    // useEffect(() => {
    //     loadImage();
    // }, [])

    const gotoDetails = () => {
        navigation.navigate('ProductDetails', {id: item.menuid});
      }
        return (
            <TouchableOpacity onPress={gotoDetails}>
            <View style={styles.itemContainer}>
            <Image
                source={{
                    uri: 'https://reactjs.org/logo-og.png',
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache'
                    },
                    body: 'Your Body goes here'
                    }}
                style={styles.image}
            />
            <View style={{flexDirection:'column'}}>
                <Text style={[styles.text, styles.bold]}>{item.menuName}</Text>
                <Text style={styles.text}>{item.description}</Text>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text}>Price:</Text>
                    <Text style={[styles.bold, styles.text]}>{item.price}</Text>
                </View>
            </View>

            </View>
            </TouchableOpacity>
        )
    }

const ProductList = ({navigation}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        const result = await getProducts()
        if (result['status'] === 'success') {
            setProducts(result['data']);
        }
    }

    const renderItem = ({item}) => {
        return <ProductItem item={item} navigation={navigation} />;
    }

    return(
        <View>
            <FlatList 
                data={products} 
                renderItem={renderItem} 
                keyExtractor={item => item.id}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        padding:20,
        backgroundColor:'#fff',
        borderRadius: 10,
        marginVertical:10,
        flexDirection:'row'
    },
    text:{
        fontSize:17,
    },
    bold:{
        fontWeight:'bold',
    },
    image:{
        width: 80,
        height: 100,
        marginRight: 10,
        borderRadius: 10,
    },
})

export default ProductList;