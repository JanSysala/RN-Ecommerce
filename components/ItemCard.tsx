import React, { useContext } from 'react';
import { Image } from 'react-native';
import { Body, Button, Card, CardItem, Icon, Left, Right, Text } from 'native-base';
import { Product } from '../models/shop';
import Reducer from '../context/Reducer';
import { GlobalContext } from '../context/Store';

export function ItemCard(props: { item: Product }) {

    const { addItem } = useContext(GlobalContext);


    const addToCart = (item: Product) => {
        addItem(item)
    };

    return (
        <Card style={{ width: '40%' }}>
            <CardItem>
                <Left>
                    <Body>
                        <Text>{props.item.name}</Text>
                        <Text note>{`${props.item.price}$`}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri: props.item.image }} style={{ height: 150, width: 150 }} />
            </CardItem>
            <CardItem>
                <Right>
                    <Button
                        onPress={() => addToCart(props.item)}
                        transparent>
                        <Icon active name="cart" />
                    </Button>
                </Right>
            </CardItem>
        </Card >
    );
}
