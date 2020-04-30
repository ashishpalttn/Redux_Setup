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
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const {isLoading,navigation} = this.props;
    if ((this.props.status === 403)) {
      Alert.alert('Alert Title', 'Authentication Failed', [
        {text: 'OK', onPress: () => this.props.removeStatus()},
      ]);
    }
    if (isLoading) {
      return (
        <SafeAreaView style={styles.indigator}>
          <ActivityIndicator size={'large'} />
        </SafeAreaView>
      );
    }
    if (!this.props.login) {
      return (
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Image
              source={require('../Assets/axfoodLogo.png')}
              style={styles.logo}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.userNameView}>
            <TextInput
              style={styles.input}
              placeholder="Enter User Id"
              onChangeText={text => this.setState({username: text})}
              value={this.state.username}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.passwordView}>
            <TextInput
              style={[styles.input, {marginBottom: 30}]}
              placeholder="Password"
              onChangeText={text => this.setState({password: text})}
              value={this.state.password}
              autoCapitalize="none"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.loginView}>
            <TouchableOpacity
              style={styles.login}
              onPress={() => {
                if (this.state.username && this.state.password) {
                  this.props.loginPress(
                    this.state.username,
                    this.state.password,
                  );
                } else {
                  Alert.alert('Please Enter UserID and Password');
                }
              }}>
              <Text style={styles.loginTxt}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgetTxt}>Forget Password?</Text>
            </TouchableOpacity>
            <View style={styles.newuserView}>
              <TouchableOpacity>
                <Text style={styles.newuserTxt}>New User?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.signupTxt}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.vagitableImageView}>
            <Image
              source={require('../Assets/background.png')}
              style={styles.vagitableImage}
              resizeMode="stretch"
            />
          </View>
        </View>
      );
    } else {
      return <View>{navigation.navigate('Concept')}</View>;
    }
  }
  componentDidMount() {
    // this.props.storedToken();
  }
}
const styles = StyleSheet.create({
  loginTxt: {
    color: colorConstant.whiteColor,
  },
  forgetTxt: {
    alignSelf: 'center',
    color: colorConstant.grayColor,
  },
  newuserTxt: {
    color: colorConstant.grayColor,
  },
  loginView: {
    flex: 1.5,
  },
  vagitableImage: {
    width: '100%',
    height: '100%',
  },
  vagitableImageView: {
    flex: 2,
    flexDirection: 'column-reverse',
  },
  signupTxt: {
    color: colorConstant.orangeColor,
    fontWeight: 'bold',
  },
  passwordView: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  userNameView: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  logoView: {
    flex: 1.5,
    flexDirection: 'column-reverse',
  },
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
    backgroundColor: colorConstant.whiteColor,
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
  login: state.homeReducer.loginresponse,
  isLoading: state.homeReducer.isLoading,
  token: state.homeReducer.loginresponse,
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
