import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'

class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Text"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(text) => {this.setState({ text: text})}}/>
            
            <Button
              style={styles.submitButton}
              onPress={() => {this.props.setText(this.state.text)}} 
              title="Submit" />
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
