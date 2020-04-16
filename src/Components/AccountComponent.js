import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
class AcountComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>AcountComponent</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c5fa89',
  },
});
export default AcountComponent;
