import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  View,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {colorConstant} from '../Config/constants';
import {
  loginAuthentication,
  storedToken,
  removeStatus,
} from '../Services/Authentication/action';
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    props.storedToken();
  }

  render() {
    const {isLoding} = this.props;
    // console.log('login ',this.props);
    if (isLoding) {
      return (
        <SafeAreaView style={styles.indigator}>
          <ActivityIndicator size={'large'} color="green" />
        </SafeAreaView>
      );
    }
    if (!this.props.login) {
      return (
        <View style={styles.container}>
          <View style={{flex: 1.5, flexDirection: 'column-reverse'}}>
            <Image
              source={require('../Assets/axfoodLogo.png')}
              style={styles.logo}
              resizeMode="stretch"
            />
          </View>
          <View style={{flex: 1, flexDirection: 'column-reverse'}}>
            <TextInput
              style={styles.input}
              placeholder="Enter User Id"
              onChangeText={text => this.setState({username: text})}
              value={this.state.username}
              autoCapitalize="none"
            />
          </View>
          <View style={{flex: 1, flexDirection: 'column-reverse'}}>
            <TextInput
              style={[styles.input, {marginBottom: 30}]}
              placeholder="Password"
              onChangeText={text => this.setState({password: text})}
              value={this.state.password}
              autoCapitalize="none"
              secureTextEntry={true}
            />
          </View>
          <View style={{flex: 1.5}}>
            <TouchableOpacity
              style={styles.login}
              onPress={() => {
                if (!this.state.username == '' && !this.state.password == '') {
                  this.props.removeStatus(),
                    this.props.loginPress(
                      this.state.username,
                      this.state.password,
                    );
                } else {
                  Alert.alert('Please Enter UserID and Password');
                }
                if (!(this.props.status == 200)) {
                  Alert.alert('Authentication Failed');
                }
              }}>
              <Text style={{color: colorConstant.whiteColor}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{alignSelf: 'center', color: colorConstant.grayColor}}>
                Forget Password?
              </Text>
            </TouchableOpacity>
            <View style={styles.newuserView}>
              <TouchableOpacity>
                <Text style={{color: colorConstant.grayColor}}>New User?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: colorConstant.orangeColor,
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'column-reverse',
            }}>
            <Image
              source={require('../Assets/background.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="stretch"
            />
          </View>
        </View>
      );
    } else {
      return <View>{this.props.navigation.navigate('Concept')}</View>;
    }
  }
  // componentDidMount() {}
}
const styles = StyleSheet.create({
  newuserView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
  logo: {
    width: '40%',
    height: 35,
    marginLeft: 20,
  },
  indigator: {
    flex: 1,
    justifyContent: 'center',
  },
  login: {
    paddingVertical: 20,
    backgroundColor: colorConstant.orangeColor,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  input: {
    width: '90%',
    marginHorizontal: '5%',
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: colorConstant.grayColor,
    fontSize: 20,
  },

  container: {
    flex: 1,
    backgroundColor: colorConstant.whiteColor,
  },
});
const mapStateToProps = state => ({
  login: state.homeReducer.loginResponce,
  isLoding: state.homeReducer.isLoding,
  token: state.homeReducer.loginResponce,
  status: state.homeReducer.status,
});
const mapDispatchToProps = {
  loginPress: loginAuthentication,
  storedToken: storedToken,
  removeStatus: removeStatus,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
