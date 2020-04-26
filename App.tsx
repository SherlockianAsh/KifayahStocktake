import React from 'react';
import {Text, View, TextInput,ScrollView, Image,  StatusBar, } from 'react-native';
import Inputs from './src/input';
import UIStyle from './css/uistyle';
export default function App() {
  return (
    <View style={UIStyle.container}>
      <View>
        <Text>Header</Text>
      </View>
      <ScrollView>
      <StatusBar barStyle="dark-content" />
        <View style={UIStyle.img_container}>
          <Image source={{uri:'https://raw.githubusercontent.com/SherlockianAsh/KifayahStocktake/master/img/logo1.png',}}
          style={UIStyle.img}/>
        </View>
        <View>
            <Inputs />
        </View>
      </ScrollView>
      <View>
          <Text>Footer</Text>
      </View>
    </View>

  );
}
