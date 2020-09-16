import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
//import all the components we are going to use.

export default class SecondPage extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Redyx seconed',
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.propValue

    };
  }

  render() {
    const onPress = (item) =>{


      this.props.navigation.navigate('reduxthird',item)
      };

    const { navigate } = this.props.navigation;
    console.log('sec', this.state.data.propValue)
    return (
      //View to hold our multiple components
      <View style={styles.container}>


        <FlatList
        data={this.state.data}
        extraData={this.state}
        renderItem={({item}) =>
        <TouchableOpacity  onPress={()=>onPress(item)}>
        <Text style={styles.item}
            >{item.screenName}</Text>
            </TouchableOpacity>
            }
             ItemSeparatorComponent={this.renderSeparator}


        keyExtractor={item => item.id}
      />


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