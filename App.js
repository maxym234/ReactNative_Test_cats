import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import Cards from './src/Cards/index.js'

export default class App extends Component {
  render(){
    return (
      <View>
        <Cards/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
 
})

