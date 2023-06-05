/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {fetchApiData} from '../data/api';
import Card from '../components/Card';
import CurrencyBar from '../components/CurrencyBar';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const apiData = await fetchApiData();
      setData(apiData && apiData.articles ? apiData.articles : []);
    };


    return (
      <ScrollView style={styles.container}>
        <CurrencyBar />
        {data.map((item) => (
          <Card
            key={item.title}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        ))}
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#029DD3',
    },
  });

  export default Home;
