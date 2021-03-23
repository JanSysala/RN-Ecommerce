import { Card, CardItem, Icon, Right, Text } from 'native-base';
import React, { useContext } from 'react'

import { GlobalContext } from '../context/Store';
import { Product } from '../models/shop';

export const Cart = () => {
    const { cartItems } = useContext(GlobalContext);

    return (
        <Card>
            {cartItems.map((product: Product) =>
                <CardItem>
                    <Text>{product.name}</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
            )}
        </Card>
    )
}