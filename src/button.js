import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'



const styles = StyleSheet.create({
 box: {
 backgroundColor: 'blue',
 padding: 20,
 borderRadius: 50
 },
 text: {
 color: 'white',
 fontSize: 20,
 textAlign: 'center'
 }
});

class Button extends React.Component {
 render() {
   return (
     <TouchableOpacity style={styles.box}>
      <Text style={styles.text}>Submit
      </Text>
    </TouchableOpacity>
        );
        }
}


export default Button
