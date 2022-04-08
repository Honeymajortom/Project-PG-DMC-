import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Label from '../components/Label';
import {addToCart, removeFromCart} from '../service/cart';
import {settings} from '../service/constants';
import {getMenuDetails} from '../service/menu';
import {showErrorAlert} from '../utils/utils';

const MenuDetails = ({route, navigation}) => {
  const {id} = route.params;
  const [details, setDetails] = useState();

  const loadDetails = async () => {
    const result = await getMenuDetails(id);
    console.log(result);
    if (result['status'] == 'success') {
      setDetails(result['data']);
    } else {
      showErrorAlert(result['error']);
    }
  };

  useEffect(() => {
    loadDetails();
  }, []);

  const toggleCartItem = async () => {
    console.log('cart action');
    if (details.cartId === -1) {
      await addToCart(details.id, details.price);
    } else {
      await removeFromCart(details.cartId);
    }

    loadDetails();
  };

  return (
    <View style={styles.container}>
      {details && (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: settings.server + '/menu/image/' + details.thumbnail,
            }}
          />
          <Text style={styles.title}>{details.title}</Text>
          <Text style={styles.description}>{details.descr}</Text>
          {/* <Label title={details.price} /> */}
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Price: Rs.{details.price}</Text>
            
          </View>

          <Button
            style={styles.add}
            onPress={toggleCartItem}
            title={details.cartId === -1 ? 'Add to Cart' : 'Remove From Cart'}
          />

        </View>
      )}

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    backgroundColor:'#eae2b7'
  },
  image: {
    height: 400,
    marginVertical: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'#003049',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color:'#003049',
  },
  description: {
    fontSize: 25,
  },
  bold: {
    fontWeight: 'bold',
  },
  add:{
    paddingTop:10,
  },
  mrp: {
    textDecorationLine: 'line-through',
  },
});

export default MenuDetails;
