import React, {Component} from 'react';

//Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import ThirdPage from './screens/thirdPage';
import reduxfirst from './screens/reduxfirst';
import reduxseconed from './screens/reduxseconed';
import reduxthird from './screens/reduxthird';

import {Provider} from 'react-redux';
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
const AppNavigator = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    FirstPage: {screen: FirstPage},
    //First entry by default be our first screen
    //if we do not define initialRouteName
    SecondPage: {screen: SecondPage},
    ThirdPage: {screen: ThirdPage},
    reduxfirst: {screen: reduxfirst},
    reduxseconed: {screen: reduxseconed},
    reduxthird: {screen: reduxthird},
  },
  {
    initialRouteName: 'reduxfirst',
  },
);
const AppContainer = createAppContainer(AppNavigator);
function DataReducer(state = data, actions) {
  return state;
}
const store = createStore(DataReducer);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

//import all the screens we are going to switch

function mapStateToProps(state) {
  return {
    data: state,
  };
}
//export default connect(mapStateToProps)(App);
export default App;
