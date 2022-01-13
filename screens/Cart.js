import React, { Component, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { incremented, decremented } from '../redux/Action';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from './../constants/theme';

const Cart = ({route, navigation}) => {
    const [counter, setCounter] = useState(0) 
    const {cartItem} = route.params
    const {count} = useSelector(state => state.counterReducer)
    const dispatch = useDispatch();
    const itemPrice = cartItem.price
    console.log(cartItem)
    const increment = () => {setCounter(counter => counter+1)}
    const decrement = () => {setCounter(counter => counter?counter-1:counter )}

    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
         <View style={{height:20}} />
         <View style={{flex:1}}>
           <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
             <Image resizeMode={"cover"} style={{width:width/3,height:width/3}}  source={cartItem?.image}/>
             <View style={{flex: 1, backgroundColor:'transparent', padding:10, justifyContent:"space-between"}}>
               <View>
                 <Text style={{ color:COLORS.black,   fontWeight:"bold", fontSize:20}}>{cartItem.name}</Text>
                 <Text>Descripcion</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontWeight:'bold',color:COLORS.darkGreen,fontSize:20}}>${cartItem.price}</Text>
                 <View style={{flexDirection:'row', alignItems:'center'}}>
                   <TouchableOpacity
                   onPress = {() => (decrement())}
                   >
                     <Icon name="ios-remove-circle" size={30} color={COLORS.darkGreen} 
                     />
                   </TouchableOpacity>                   
                   <Text style={{paddingHorizontal:8, fontWeight:'bold'}}>{counter}</Text>
                   <TouchableOpacity
                   onPress = {() => (increment())}
                   >
                     <Icon name="ios-add-circle" size={30} color={COLORS.darkGreen}  />
                   </TouchableOpacity>
                 </View>
               </View>
             </View>
           </View>
         </View>
         <View>
             <Text>Total Amount = {itemPrice * counter}</Text>
         </View>

       <TouchableOpacity style={{
           backgroundColor: COLORS.darkGreen,
           width:width-40,
           alignItems:'center',
           padding:10,
           borderRadius:5
         }}>
         <Text style={{
             fontSize:24,
             fontWeight:"bold",
             color:'white'
           }}>
           Place Order
         </Text>
       </TouchableOpacity>

       <View style={{height:20}} />


      </View>
    );
}

export default Cart;