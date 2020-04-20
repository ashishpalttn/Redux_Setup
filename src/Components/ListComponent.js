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
class ListComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {navigation, responceData} = this.props;
    console.log('List props=', this.props);
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Account');
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
        <FlatList
          data={responceData}
          renderItem={({item}) => (
            <View
              style={styles.list}>
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
  list:{
  width: '94%',
  height: 105,
  backgroundColor: '#b7de81',
  marginVertical: 8,
  padding:10,
  borderRadius:10,
  marginHorizontal:"3%"

},
  container: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
const mapStateToProps = state => ({
  responceData: state.dataReducer.responceData,
  token: state.homeReducer.loginResponce,
});
const mapDispatchToprops = {
  dataCall: dataRequest,
};
export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(ListComponent);
