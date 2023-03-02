import React from 'react';
import {View, Text,ImageBackground} from "react-native";
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {

    const {name,tagLine,tagLineCTA,image} = props.car;

    return (
        <View style={styles.carcontainer}>
           <ImageBackground source={image} style={styles.image}/>
            {/* require('../../assets/images/ModelX.jpeg') */}
            <View style={styles.titles}>
                <Text style={styles.title}>{name} </Text>{/*Baluga*/}
                <Text style={styles.subtitle}>
                    {tagLine}
                    <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
                </Text>{/*The beast amoung us.*/}
            </View>
            <View style={styles.buttonContainer}>
                    <StyledButton 
                        type="primary" 
                        content={"Click and be amazed"} 
                        onPress={() =>{
                            console.warn('amazing button was clicked');
                        }}
                    />
                    <StyledButton 
                        type="secondary" 
                        content={"Check out the beast"} 
                        onPress={() =>{
                            console.warn('Checking out the beast');
                        }}
                    />
            </View>
        </View>
    );
};

export default CarItem;
