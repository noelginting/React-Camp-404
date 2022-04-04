/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
        <Header title={'Home'}/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'#fff',
    },
});
