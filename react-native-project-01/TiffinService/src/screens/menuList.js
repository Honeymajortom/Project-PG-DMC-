import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  
} from 'react-native';
import {settings} from '../service/constants';
import {getMenuThumbnail} from '../service/menu';
import {getAllMenu} from '../service/menu';
import Button from '../components/Button';


const MenuItem = ({item, navigation}) => {
  const [image, setImage] = useState();

  const loadImage = async () => {
    const tempImage = await getMenuThumbnail(item.thumbnail);
    setImage(tempImage);
  };

  useEffect(() => {
    loadImage();
  }, []);

  const gotoDetails = () => {
    navigation.navigate('MenuDetails', {id: item.id});
  };



  // const {id} = route.params;
  // const [details, setDetails] = useState();

  // const loadDetails = async () => {
  //   const result = await getMenuDetails(id);
  //   console.log(result);
  //   if (result['status'] == 'success') {
  //     setDetails(result['data']);
  //   } else {
  //     showErrorAlert(result['error']);
  //   }
  // };

  // useEffect(() => {
  //   loadDetails();
  // }, []);

  // const toggleCartItem = async () => {
  //   console.log('cart action');
  //   if (details.cartId === -1) {
  //     await addToCart(details.id, details.price);
  //   } else {
  //     await removeFromCart(details.cartId);
  //   }

  //   loadDetails();
  // };

  return (
    <TouchableOpacity onPress={gotoDetails}>
      <View style={styles.itemContainer}>
        <View>
          {image && (
            <Image
              style={styles.image}
              source={{
                uri: settings.server + '/menu/image/' + item.thumbnail,
              }}
            />
          )}
        </View>
            
        <View style={{flexDirection: 'column'}}>
          <Text style={[styles.text, styles.bold]}>{item.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Price: Rs.{item.price}</Text>
          </View>
          <Button 
          
          title={'Add'}
          />
        </View>

      </View>

    </TouchableOpacity>
  );
};

const MenuList = ({navigation}) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    loadMenus();
  }, []);

  const loadMenus = async () => {
    const result = await getAllMenu();
    if (result['status'] === 'success') {
      setMenu(result['data']);
    }
  };

  const renderItem = ({item}) => {
    return <MenuItem item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {/* <Text style={styles.text}>Drinks</Text>
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      /> */}

      
    
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
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor:'#eae2b7',
    marginRight: 10,
    marginLeft: 10,
    borderBottomColor: '#003049',
  },
  text: {
    fontSize: 25,
    color:'#003049',
  },
  descr: {
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },

  mrp: {
    textDecorationLine: 'line-through',
  },
  image: {
    
    borderColor:'#003049',
    width: 100,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
  },
  
});

export default MenuList;
