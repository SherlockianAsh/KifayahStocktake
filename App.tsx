import React from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Hello World</Text>
      <View style={styles.container}>
        <Text>My name is Asyrof</Text>
        <Text>Testing 2 1 4</Text>
        <Image source={{uri:'https://raw.githubusercontent.com/SherlockianAsh/KifayahStocktake/master/img/logo.png',}}
        style={{width: 200, height: 200}}/>
      </View>
      <TextInput
      style={styleInput.container}
      defaultValue="testy me"/>
    </ScrollView>

  );
}

const styleInput = StyleSheet.create(
  {container:{
    height:40,
    borderColor:'gray',
    borderWidth:1
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
