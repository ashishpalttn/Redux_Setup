import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {conceptDataRequest} from '../Services/Data/action';
import {colorConstant} from '../Config/constants';
class Concept extends React.Component {
  render() {
    const {navigation, conceptData} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.conceptTxt}>Select Concept</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image
              style={styles.searchLogo}
              source={require('../Assets/search.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyView}>
          <FlatList
            data={conceptData}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('List')}>
                <View style={styles.list}>
                  <Text style={styles.listTxt}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {
    this.props.conceptCall(this.props.token);
  }
}
const styles = StyleSheet.create({
  listTxt: {
    fontSize: 17,
  },
  bodyView: {
    flex: 12,
  },
  searchLogo: {
    width: 28,
    height: 28,
    marginLeft: 20,
  },
  conceptTxt: {
    fontWeight: 'bold',
    width: '75%',
    marginLeft: 10,
    fontSize: 30,
    marginLeft: 24,
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 5,
  },
  list: {
    width: '94%',
    height: 70,
    justifyContent: 'center',
    marginVertical: 8,
    padding: 12,
    borderRadius: 10,
    marginHorizontal: '3%',
    backgroundColor: colorConstant.whiteColor,
  },
  container: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: colorConstant.whiteColor,
  },
});

const mapStateToProps = state => ({
  conceptData: state.dataReducer.conceptData,
  token: state.homeReducer.loginresponse,
});
const mapDispatchToprops = {
  conceptCall: conceptDataRequest,
};
export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(Concept);
