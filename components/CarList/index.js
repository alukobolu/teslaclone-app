import React from 'react';
import {View, Dimensions,FlatList} from "react-native";
import styles from './styles';
import cars from './cars'
import CartItem from '../CarItem'

const CarList = (props) => {

    return (
        <View  style={styles.container} >
        
            <FlatList 
                data ={cars}
                renderItem ={({item}) => <CartItem car={item} />}
                showsVerticalScrollIndicator ={false}
                snapToAlignment = {'start'}
                decelerationRate ={'normal'}
                snapToInterval ={Dimensions.get('screen').height}
            />
        
        </View>
    );
};

export default CarList;
