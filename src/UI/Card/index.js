import React, { useState } from 'react'
import{ View, Text, Image, TouchableOpacity, StyleSheet, Button} from 'react-native'

export const Card = ({dataRequset}) => {
    const [ on, setOn ] = useState(false)
    const changeBackground = () => {
        setOn(true);
    }
    const clickButton = () => {
        alert("Selected card whith identifier " + dataRequset.id)
        setOn(false)
    }
	return(
        <View style={{...styles.view, backgroundColor:  on ? 'grey' : 'white'}}>
            <Text style={styles.text}>{dataRequset.name}</Text> 
                <TouchableOpacity onPress={changeBackground}>
                    <Image  style={styles.image} source={{uri: dataRequset.imageUrl}}/>                               
                </TouchableOpacity>  
            <Button style={styles.btn} title="Submit" onPress={clickButton}/>
        </View>
	)
} 
const styles = StyleSheet.create({
	view: {
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
        padding: 20
	},
	text: {
		color: 'black',
		fontSize: 16,
        marginBottom: 20,
        textAlign: 'center'
	},
	image:{
		width: 300,
		height: 300,
        marginBottom: 10,
        display: 'flex'
	},
    btn: {
        width: 310,
        marginBottom: 10
    }
});