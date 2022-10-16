import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import Header from './components/Header.js'
import Body from './components/Body.js'
import Constants from 'expo-constants';

export default class App extends React.Component {
  
  /*constructor(props){
    super(props);
    this.mostrarTexto = true;
    this.mostrarBotao = true;
  }*/

  render(){

    return (
      <ScrollView style={{flex: 1, marginTop:Constants.statusBarHeight}}>
        <Header></Header>
        <Body></Body>
      </ScrollView>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/