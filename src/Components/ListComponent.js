import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
class ListComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Account');
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9bc967',
  },
});
export default ListComponent;
