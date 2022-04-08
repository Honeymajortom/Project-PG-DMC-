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
// import {getMenuThumbnail} from '../service/menu';
import {getorders} from '../service/orders';

const Orderitem = ({item, navigation}) => {
  // const [image, setImage] = useState();

//   const loadImage = async () => {
//     const tempImage = await getMenuThumbnail(item.thumbnail);
//     setImage(tempImage);
//   };

//   useEffect(() => {
//     loadImage();
//   }, []);

  // const gotoDetails = () => {
  //   navigation.navigate('MenuDetails', {id: item.id});
  // };

  return (

    // <TouchableOpacity onPress={gotoDetails}>
      <View style={styles.itemContainer}>
        {/* <View>
          {image && (
            <Image
              style={styles.image}
              source={{
                uri: settings.server + '/menu/image/' + item.thumbnail,
              }}
            />
          )}
        </View> */}
            
       <View style={{flexDirection: 'column'}}>

        <View style={{flexDirection: 'row'}}>
             <Text style={styles.text}>order id: </Text>
              <Text style={[styles.text, styles.bold]}>{item.id}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>user id: </Text>
            <Text style={[styles.text, styles.bold]}>{item.userId}</Text>
          </View>
           
       {/* <Text style={styles.text}>{item.descr}</Text> */}
       <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Total Price: Rs. </Text>
          <Text style={[styles.text]}>{item.total}</Text>
       </View>

       <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Order Status: </Text>
          <Text style={[styles.text]}>{item.status}</Text>
       </View>

       <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Payment Mode: </Text>
          <Text style={[styles.text]}>{item.paymentMode}</Text>
       </View>

       <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Order Date: </Text>
          <Text style={[styles.text]}>{item.createdTimeStamp}</Text>
       </View>
           
             {/* <Text style={styles.text}>Price: Rs. </Text>
             <Text style={[styles.bold, styles.text]}>{item.price} </Text> */}
        </View>
      </View>
   
    // </TouchableOpacity>
  );
};

const Orderhistory = ({navigation}) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    loadorders();
  }, []);

  const loadorders = async () => {
    const result = await getorders();
    if (result['status'] === 'success') {
      setOrder(result['data']);
    }
  };

  const renderItem = ({item}) => {
    return <Orderitem item={item} navigation={navigation} />;
  };

  return (
    <View>
      <FlatList
        data={order}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 15,
    backgroundColor:'#fcbf49',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  mrp: {
    textDecorationLine: 'line-through',
  },
  image: {
    width: 70,
    height: 90,
    marginRight: 10,
  },
});

export default Orderhistory;
