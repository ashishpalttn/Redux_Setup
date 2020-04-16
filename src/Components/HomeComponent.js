import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {toggleFlag} from '../Services/Home/action'
class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation,flag} = this.props;
    // console.log(navigation)
    console.log('flag=',this.props)
    return (
      <SafeAreaView style={styles.container}>

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
  componentDidMount(){
    this.props.toggleHomeFlag()
 
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b6fc03',
  },
}); 
const mapStateToProps= state =>({
flag: state.homeReducer.homeFlag
})
const mapDispatchToProps = {
  toggleHomeFlag : toggleFlag 

}
export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
