import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {search} from '../Services/Data/action';
import {colorConstant} from '../Config/constants';
class AcountComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.searchInput.length > 2) {
      props.searchName(state.searchInput, props.token);
    }
  }
  render() {
    const {searchedData, navigation} = this.props;
    if (this.state.searchInput.length < 3) {
      flatData = [];
    } else {
      flatData = searchedData;
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Concept')}>
            <Image
              style={styles.backLogo}
              source={require('../Assets/back.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={text => this.setState({searchInput: text})}
            value={this.state.username}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.bodyView}>
          <FlatList
            data={flatData}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Product', {item})}>
                <View style={styles.item}>
                  <Text>{item.productName}</Text>
                </View>
                <View style={styles.line} />
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  bodyView: {
    flex: 12,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: colorConstant.grayColor,
  },
  backLogo: {
    width: 28,
    height: 28,
    marginLeft: 15,
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: colorConstant.whiteColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  item: {
    padding: 20,
    width: '100%',
    backgroundColor: colorConstant.whiteColor,
    marginBottom: 2,
    paddingHorizontal: 30,
  },
  input: {
    width: '68%',
    fontSize: 20,
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colorConstant.whiteColor,
  },
});
const mapStateToProps = state => ({
  searchedData: state.dataReducer.searchedData,
  token: state.homeReducer.loginresponse,
});
const mapDispatchToProps = {
  searchName: search,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AcountComponent);
