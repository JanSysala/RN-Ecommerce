import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Shop: {
            screens: {
              ShopScreen: 'one',
            },
          },
          Cart: {
            screens: {
              CartScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
