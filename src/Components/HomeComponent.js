import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {
  toggleFlag,
  loginAuthentication,
  storedData,
} from '../Services/Authentication/action';
class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  static getDerivedStateFromProps(props) {
    
      props.storedData()
    
    if (props.login) {
      return props.navigation.navigate('List');
    }
  }
  render() {
    const {navigation, flag, login, isLoding} = this.props;
    console.log('login Responce', this.props);
    if (isLoding) {
      return (
        <SafeAreaView style={styles.indigator}>
          <ActivityIndicator size={'large'} color="green" />
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>WELCOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter User Id"
          onChangeText={text => this.setState({username: text})}
          value={this.state.username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter User Id"
          onChangeText={text => this.setState({password: text})}
          value={this.state.password}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            this.props.loginPress(this.state.username, this.state.password);
          }}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('List');
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
        <Text>{flag}</Text>
      </SafeAreaView>
    );
  }
  componentDidMount() {
  }
}
const styles = StyleSheet.create({
  welcome: {
    color: '#578c0d',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20,
  },
  indigator: {
    flex: 1,
    justifyContent: 'center',
  },
  login: {
    paddingHorizontal: 45,
    paddingVertical: 12,
    backgroundColor: '#578c0d',
    borderRadius: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#578c0d',
    flex: 0.07,
    width: '80%',
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 20,
    margin: 15,
    // borderRadius:2
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
const mapStateToProps = state => ({
  login: state.homeReducer.loginResponce,
  isLoding: state.homeReducer.isLoding,
  token: state.homeReducer.loginResponce,
});
const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
  loginPress: loginAuthentication,
  storedData: storedData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
