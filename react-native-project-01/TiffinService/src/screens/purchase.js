import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Label from '../components/Label';
import {useEffect, useState} from 'react';
//import {getAddress} from '../service/user';
import {getCartItems} from '../service/cart';
import {onPurchase} from '../service/orders';

import { showErrorAlert, showSuccessAlert } from '../utils/utils';

const Purchase = ({route,navigation}) => {
    const {items} = route.params;
    const {total} = route.params;
    //console.log(items,total,"RK")
    //const [addresses, setAddresses] = useState([]);

    // useEffect(() => {  
    //     loadAddress();
    //   }, []);

    //   const loadAddress = async () => {
    //     const result = await getAddress();
    //     if (result['status'] === 'success') {
    //         console.log("RKK")
    //       console.log(result['data']);
    //       setAddresses(result['data']);
    //     }else{
    //         showErrorAlert("Error while loading address")
    //     }
    //   };

      const onPlaceOrder = async () => {
        const result = await onPurchase(items,total);
        if (result['status'] === 'success') {
            console.log("purchase")
            showSuccessAlert("Congratulations !!! orderPlaced.")
            getCartItems()

            navigation.navigate('Cart');
        }else{
            showErrorAlert("Error while placing the order")
        }
      };
        
    
      
     

  return (
    <View style={styles.container}>
      <View style={styles.bill} >
      {/* {addresses.map(item => {
          return (
              <View>
            <Text>Address Details :</Text>
         <Label title={item.line1} />
         <Label title={item.line2} />
         <Label title={item.city} />
         <Label title={item.state} />
         <Label title={item.country} />
         <Label title={item.zipcode} />
        </View>
          );
        })} */}
        <View >
          <Text style={styles.baseText}>Payment Details</Text>
          <Text  style={styles.titleText} >Payment Mode: COD </Text>
          <Text style={styles.subtitleText}>Total: Rs.{total}/- </Text>
        </View>

        <Button style={styles.button} title="Place Order" onPress={onPlaceOrder}/>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  bill:{
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor:'#eae2b7',
    borderRadius:10,
  },
  baseText: {
    fontSize: 30,
    fontFamily: "Cochin",
    color: 'red',
    fontWeight: "bold"
  },
  titleText: {
    fontSize: 30,
    
  },
  subtitleText:{
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    paddingTop:700,
  },
});


export default Purchase;
