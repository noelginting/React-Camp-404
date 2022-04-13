/* eslint-disable prettier/prettier */
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Header, ProductCard} from '../../component';
//import { SafeAreaView } from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import axios from 'axios';

const dummy = [
  {
    id:1,
    title:'Product Name',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    price:'50000',
    image:'https://source.unsplash.com//1600x900/?shoes',
  },
  {
    id:2,
    title:'Product Name',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    price:'50000',
    image:'https://source.unsplash.com//1600x900/?shoes',
  },
  {
    id:3,
    title:'Product Name',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    price:'50000',
    image:'https://source.unsplash.com//1600x900/?shoes',
  },
];

const renderItem = ({item}) => (
  <ProductCard
    title={item.nama_barang}
    desc={item.deskripsi}
    price={item.harga}
    image={item.gambar }
  />
);

const Home = () => {
  const stateGlobal = useSelector(state => state);
  const [data, setData] = useState();

  // console.log('state global: ', stateGlobal);

  useEffect(() => {
    axios
    .get('http://api-test.q.camp404.com/public/api/material',{
      headers: {Authorization: `Bearer ${stateGlobal.access_token}`},
    })
    .then(response => {
      let res = response.data;
      setData(res.materials);
    })
    .catch(error => {
      console.log(error);
    });
  });

  return (
    <SafeAreaView style={styles.page}>
        {/* <Header title={'Home'}/> */}
    <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text style={styles.label}> List Product </Text>}
        ListFooterComponent={<View style={styles.footer}/>}
        style={styles.container}
    />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'#fff',
    },
    container:{
      backgroundColor:'#fff',
      padding:16,
    },
    label:{
      fontSize:16,
      fontWeight:'bold',
      color:'#2F2E41',
      marginBottom:16,
    },
    footer:{
      height:30,
    },
});
