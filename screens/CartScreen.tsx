import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Cart } from '../components/Cart';

export default function CartScreen() {
  return (
    <ScrollView
      horizontal={false}
      scrollEnabled={true}
      contentContainerStyle={styles.container}>
      <Cart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
