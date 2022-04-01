/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.pages}>
      <Text>Hello Word</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  pages: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});
