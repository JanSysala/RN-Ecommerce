import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ItemCard } from '../components/ItemCard';
import { items } from '../data/items';
import { Product } from '../models/shop';

export default function ShopScreen() {
  return (
    <ScrollView
      horizontal={false}
      scrollEnabled={true}
      contentContainerStyle={styles.container}>
      {items.map((item: Product) => (
        <ItemCard
          key={item.name}
          item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row'
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
