import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
//import all the components we are going to use.

export default class ThirdPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Third Page',
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.propValue 
      
    };
  }

  render() {
    const onPress = (item) =>{

      console.log(item)
      this.props.navigation.navigate('ThirdPage',item)
      };

    const { navigate } = this.props.navigation;
    console.log('third', this.state.data)
    return (
      <View style={styles.container}>

    <Text>{this.state.data}</Text>
        
 
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
  },
});