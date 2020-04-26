import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {deleteToken} from '../Services/Authentication/action';
import {colorConstant} from '../Config/constants';

class ProductDtail extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {navigation} = this.props;
    const {item} = this.props.route.params;
    console.log('Product', item);
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Image
              style={styles.backLogo}
              source={require('../Assets/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={styles.productTxt}>
            Product Detail
          </Text>
           <TouchableOpacity onPress={() => (this.props.signOut(),navigation.navigate('Home'))}>
            <Image
              style={{width: 28, height: 28,}}
              source={require('../Assets/logout.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flex: 12, marginHorizontal: 30}}>
          <Text style={styles.productNameTxt}>
            {item.productName}
          </Text>
          <Text style={{fontSize: 16,color:colorConstant.darkGrayColor}}>{item.barcodeId}</Text>
          <Text style={{marginTop: 25,color:colorConstant.darkGrayColor}}>Last Scaned Detail</Text>
          
          <View style={{backgroundColor: colorConstant.lightGrayColor,marginTop:10,borderRadius:5}}>
          <View
            style={styles.quantityView}>
            <Text style={{color:colorConstant.darkGrayColor}}> Quantity</Text>
            {(item.volumeLabel=="")?<Text style={{color:colorConstant.darkGrayColor}}>0Kg</Text>:<Text style={{color:colorConstant.darkGrayColor}}>{item.volumeLabel}</Text>}
            
          </View>
          <View style={styles.line}></View>
          <View
            style={styles.quantityView}>
            <Text style={{color:colorConstant.darkGrayColor}}> Price</Text>
            {(item.price==null)? <Text style={{color:colorConstant.darkGrayColor}}>$0</Text>:<Text style={{color:colorConstant.darkGrayColor}}>{item.price}</Text>}
           
          </View>
          </View>
         
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  line:{
    width:'86%',height:1,
  backgroundColor:colorConstant.grayColor ,
  alignSelf:'center'
},
  quantityView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  productNameTxt:{
    fontSize: 20, 
    fontWeight: 'bold', 
    paddingVertical: 8
  },
  productTxt:{
    fontWeight: 'bold',
    width: '75%',
    marginLeft: 10,
    fontSize: 30,
  },
  backLogo:{
    width: 28, 
    height: 28, 
    marginLeft: 15
  },
  headerView:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colorConstant.whiteColor,
    marginBottom: 30,
  },
});
const mapStateToProps = state => ({
  // token: state.homeReducer.loginResponce,
});
const mapDispatchToprops = {
  signOut: deleteToken,
};
export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(ProductDtail);
