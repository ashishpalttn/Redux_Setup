import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountComponent from './src/Components/SearchComponent';
import Concept from './src/Components/ConceptComponent';
import LoginComponent from './src/Components/LoginComponent';
import ProductDtail from './src/Components/ProductDetail';
import ListComponent from './src/Components/ListComponent';
import {Provider} from 'react-redux';
import store from './src/Services/rootReducer';
const Stack = createStackNavigator();
class Route extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Home"
              component={LoginComponent}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Concept"
              component={Concept}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="List"
              component={ListComponent}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Product"
              component={ProductDtail}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Account"
              component={AccountComponent}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default Route;
