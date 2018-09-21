import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 10,
    margin: 20,
    padding: 20,
    paddingTop: 25,
    paddingBottom: 25,
    elevation: 1,
    borderRadius: 3.5,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
  }
});

export default Card;