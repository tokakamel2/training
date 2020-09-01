// First screen which we will use to send the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      username: '',
     data: [
        {
          screenName: 'screen one ',
          propValue: [
            {screenName: 'sub screen one ', propValue: 'test1'},
            {screenName: 'sub screen two ', propValue: 'test2'},
          ],
        },
        {
          screenName: 'screen two ',
          propValue: [
            {screenName: 'sub screen three ', propValue: 'test3'},
            {screenName: 'sub screen four ', propValue: 'test4'},
          ],
        },
      ]
    };
  
  
  
  }
  static navigationOptions = {
    //Setting the header of the screen
    title: 'First Page',
  };

  render() {
    const onPress = (item) =>{

      
      this.props.navigation.navigate('SecondPage',item)
      };

    const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        <FlatList  
                    data={this.state.data}  
                    renderItem={({item}) =>  
                        <TouchableOpacity  onPress={()=>onPress(item)}>
                        <Text style={styles.item}  
                            >{item.screenName}</Text>
                            </TouchableOpacity>
                            }  
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  },
});