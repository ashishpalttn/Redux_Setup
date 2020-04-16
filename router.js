import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountComponent from './src/Components/AccountComponent';
import HomeComponent from './src/Components/HomeComponent';
import ListComponent from './src/Components/ListComponent';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';
const Stack = createStackNavigator();
// console.log("Stack=",Stack.Navigator)
class Route extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="List" component={ListComponent} />
            <Stack.Screen name="Account" component={AccountComponent} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default Route;
