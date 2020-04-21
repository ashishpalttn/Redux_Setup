import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {search} from '../Services/Data/action';
import {FlatList} from 'react-native-gesture-handler';
class AcountComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.searchInput.length >= 3) {
      props.searchName(state.searchInput, props.token);
    }
  }
  render() {
    console.log('Account', this.props.searchedData);
    const {searchedData} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search "
          onChangeText={text => this.setState({searchInput: text})}
          value={this.state.username}
          autoCapitalize="none"
        />
        <Text>{this.state.searchInput}</Text>
        <FlatList
          data={searchedData}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text>{item.productName}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
  componentDidMount() {
    // this.props.searchName(this.state.searchInput);
  }
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    // width: '100%',
    backgroundColor: '#c5fa89',
    margin: 5,
    borderRadius: 30,
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: '#94e30b',
    flex: 0.07,
    width: '80%',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
});
const mapStateToProps = state => ({
  searchedData: state.dataReducer.searchedData,
  token: state.homeReducer.loginResponce,
});
const mapDispatchToProps = {
  searchName: search,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AcountComponent);
