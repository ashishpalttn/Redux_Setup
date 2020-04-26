import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {dataRequest} from '../Services/Data/action';
import {colorConstant} from '../Config/constants';

class ListComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {navigation, responceData} = this.props;
    console.log('LIST', this.props);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.navigate('Concept')}>
            <Image
              style={styles.backLogo}
              source={require('../Assets/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.storeTxt}>Select Store</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image
              style={{width: 28, height: 28}}
              source={require('../Assets/search.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flex: 12}}>
          <FlatList
            data={responceData}
            renderItem={({item}) => (
              <View style={styles.list}>
                <Text style={{fontWeight: 'bold', paddingBottom: 8}}>
                  {item.storeName}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginRight: 5}}>{item.city},</Text>
                  <Text>{item.storeAddress}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    this.props.dataCall(this.props.token);
  }
}
const styles = StyleSheet.create({
  backLogo: {
    width: 28,
    height: 28,
    marginLeft: 15,
  },
  storeTxt: {
    fontWeight: 'bold',
    width: '75%',
    marginLeft: 10,
    fontSize: 30,
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 5,
  },

  list: {
    width: '90%',
    height: 105,
    backgroundColor: 'white',
    marginVertical: 8,

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    padding: 20,
    borderRadius: 5,
    marginHorizontal: '5%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colorConstant.whiteColor,
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
