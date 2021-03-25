import { Button, Card, CardItem, Icon, Left, Right, Text } from 'native-base';
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

import { Product } from '../models/shop';

export const Cart = () => {
    const { cartItems, increase, decrease, removeProduct } = useContext(CartContext);
    return (
        cartItems.length > 0 ?
            <Card>
                {cartItems.map((product: Product) =>
                    product.quantity > 0 ?
                        <CardItem key={Math.random()}>
                            <Left>
                                <Button>
                                    <Icon
                                        onPress={() => increase(product)}
                                        name="add" />
                                </Button>
                                <Button
                                    disabled={product.quantity <= 0}>
                                    {product.quantity >= 2
                                        ? <Icon
                                            onPress={() => { product.quantity >= 2 ? decrease(product) : null }}
                                            name="remove" />
                                        : <Icon
                                            onPress={() => { product.quantity = 1 ? removeProduct(product) : null }}
                                            name="remove" />
                                    }
                                </Button>
                            </Left>
                            <Text>{product.quantity}x {product.name}:{product.price}$</Text>
                            <Right>
                                <Button
                                    dark
                                    onPress={() => removeProduct(product)}>
                                    <Icon name="trash" />
                                </Button>
                            </Right>
                        </CardItem>
                        : null
                )
                }
            </Card > : <Text>Cart is empty.</Text>
    )
}