// First screen which we will use to send the data
import React, {Component} from 'react';
//import react in our code.

import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
//import all the components we are going to use.

import {connect} from 'react-redux';
import {createStore} from 'redux';

const data = [
  {
    key: '0',
    screenName: 'screen one ',
    propValue: [
      {key: '01', screenName: 'sub screen one ', propValue: 'test1'},
      {key: '11', screenName: 'sub screen two ', propValue: 'test2'},
    ],
  },
  {
    key: '1',
    screenName: 'screen two ',
    propValue: [
      {key: '02', screenName: 'sub screen three ', propValue: 'test3'},
      {key: '12', screenName: 'sub screen four ', propValue: 'test4'},
    ],
  },
];

function updateArray(array, item){
  return array[item.index]
  console.log('dd',array)


}


function DataReducer(state = data, action) {
  switch(action.type){
    case 'UPDATE':
      return updateArray(state, action.payload)
      default:
        return state
  }
 console.log('dd',state)

}
const store = createStore(DataReducer);
/////////////////////////////////////////////////////////////////////////////
class reduxFirst extends Component {
  constructor(props) {
    //constructor to set default state
    super(props);
  }
  static navigationOptions = {
    //Setting the header of the screen
    title: 'First redux',
  };

  render() {
    const onPress = async (item) => {
      this.props.navigation.navigate('reduxseconed',item);
    };

    const {navigate} = this.props.navigation;
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <Text style={styles.item}>{item.screenName}</Text>
            </TouchableOpacity>
          )}
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

function mapDispatchToProps(dispatch){
  return{
    updateArray:(data)=> dispatch ({type:'UPDATE', payload:{data} })
  }
}

function mapStateToProps(state) {
  return {
    data: state,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(reduxFirst);
