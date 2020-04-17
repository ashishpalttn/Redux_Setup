import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity,TextInput, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {toggleFlag, loginAuthentication} from '../Services/Home/action';
class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'axfood',
      password: 'axfood@123',
    };
  }
  render() {
    const {navigation, flag, login,isLoding} = this.props;
    console.log('login Responce', this.props);
    if(isLoding==true)
    return (<SafeAreaView style={styles.indigator}>
      <ActivityIndicator size={'large'} color="green" />
    </SafeAreaView>)
      else if(login)
      {
      return <SafeAreaView>{navigation.navigate('List')}
        </SafeAreaView>
      }
    return (
      <SafeAreaView style={styles.container}>
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
    // this.props.toggleHomeFlag();
  }
}
const styles = StyleSheet.create({
  indigator:{
    flex:1,
    justifyContent:'center'
  
  },
  login: {
    paddingHorizontal: 45,
    paddingVertical: 12,
    backgroundColor: '#94e30b',
    borderRadius: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#94e30b',
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
  flag: state.homeReducer.homeFlag,
  login: state.homeReducer.loginResponce,
  isLoding:state.homeReducer.isLoding
});
const mapDispatchToProps = {
  toggleHomeFlag: toggleFlag,
  loginPress: loginAuthentication,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
