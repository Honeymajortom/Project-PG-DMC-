import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import {
  getCartItems,
  removeFromCart,
  updateQuantityOfCartItem,
} from '../service/cart';
import {settings} from '../service/constants';
import {onPurchase} from '../service/order'
const CartItem = ({item, onQuantityChange}) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.image}
        source={{
          uri: settings.server + '/menu/image/' + item.thumbnail,
        }}
      />

      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <Text style={[styles.text, styles.bold]}>{item.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Price: Rs.{item.price}</Text>
            <Text style={[styles.text]}> * {item.quantity}</Text>
          </View>
        </View>

        <View style={styles.buttons}>

          <TouchableOpacity style={styles.button}
            onPress={() => onQuantityChange(item.cartId, item.quantity + 1)}>
            <Image  source={require('../assets/plus.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={() => onQuantityChange(item.cartId, item.quantity - 1)}>
            <Image  source={require('../assets/minus.png')} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const Cart = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const loadItems = async () => {
    const result = await getCartItems();
    if (result['status'] === 'success') {
      let price = 0;
      for (const item of result['data']) {
        price += item.quantity * item.price;
      }
      console.log(result['data']);
      setItems(result['data']);
      setTotal(price);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

    
  
// };
const Purchase = () => {
  console.log(total)
  navigation.navigate('Purchase', {items: items, total : total});

}

  const onQuantityChange = async (id, quantity) => {
    console.log(`id: ${id}, quantity = ${quantity}`);
    if (quantity === 0) {
      await removeFromCart(id);
    } else {
      await updateQuantityOfCartItem(id, quantity);
    }

    loadItems();
  };

  const renderItem = ({item}) => {
    return <CartItem onQuantityChange={onQuantityChange} item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{margin: 16}}
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.summary}>
        <View>
          <Text style={[styles.bold]}>Total</Text>
          <Text style={[styles.text, styles.bold]}>Rs.{total}</Text>
        </View>
        <Button title="Purchase" onPress={Purchase}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fcbf49'
  },
  itemContainer: {
    
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor:'#eae2b7',
    marginRight: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 25,
    color:'#003049',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  mrp: {
    textDecorationLine: 'line-through',
  },
  image: {
    
    borderColor:'#003049',
    width: 90,
    height: 110,
    marginRight: 10,
    borderRadius: 10,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eae2b7',
    padding: 16,
  },
  buttons: {
    padding: 10,
    marginRight: 60,
    justifyContent: 'space-between',
    
  },
  button: {
    marginTop: 5,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor:'#d62828',
    borderRadius: 40,

  }
});

export default Cart;
