import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {dataRequest} from '../Services/Data/action';
import {FlatList} from 'react-native-gesture-handler';
import {deleteToken} from '../Services/Authentication/action';
class ListComponent extends React.Component {
  constructor() {
    super();
  }
  // static getDerivedStateFromProps(props){
  //   if (props.login=="") {
  //     return props.navigation.navigate('Home');
  //   }
  // }
  render() {
    const {navigation, responceData} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.signOut(), navigation.navigate('Home');
          }}>
          <View style={styles.buttonView}>
            <Text> Sign Out</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <View style={[styles.buttonView, {margin: 10}]}>
            <Text>Search</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          data={responceData}
          renderItem={({item}) => (
            <View style={styles.list}>
              <Text>{item.storeId}</Text>
              <Text>{item.storeName}</Text>
              <Text>{item.city}</Text>
              <Text>{item.storeAddress}</Text>
              <Text>{item.zipCode}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
  componentDidMount() {
    this.props.dataCall(this.props.token);
  }
}
const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 30,
    marginHorizontal: '30%',
  },
  list: {
    width: '94%',
    height: 105,
    backgroundColor: '#b7de81',
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: '3%',
  },
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom:30
  },
});
const mapStateToProps = state => ({
  responceData: state.dataReducer.responceData,
  token: state.homeReducer.loginResponce,
});
const mapDispatchToprops = {
  dataCall: dataRequest,
  signOut: deleteToken,
};
export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(ListComponent);
