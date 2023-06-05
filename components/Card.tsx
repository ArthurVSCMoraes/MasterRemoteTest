/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

const Card = ({title, description, url}) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.url} onPress={handlePress}>
        Leia mais
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: 'black',
  },
  url: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Card;
