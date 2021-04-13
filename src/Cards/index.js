import React, {Component} from 'react'
import{ View, StyleSheet, Text, ScrollView} from 'react-native'
import request from '../request'
import { Card } from '../UI/Card';


export default class Cards extends Component {
    render(){
        return(
            <ScrollView>
                <View style={styles.view}>
                {request.map( card =>
                    
                        <Card key={card.id} dataRequset={card}/>
                    
                    )} 
                </View>
            </ScrollView>
        )
    }
} 
const styles = StyleSheet.create({
    text:{
        margin: 20,
        color: 'gray',
        fontSize: 12
    },
    view: {
        paddingBottom: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
    
});