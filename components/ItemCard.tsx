import React from 'react';
import {Image} from 'react-native';
import {Body, Button, Card, CardItem, Icon, Left, Right, Text} from 'native-base';
import {Item} from '../models/shop';

export function ItemCard(props: { item: Item }) {
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
                    <Button transparent>
                        <Icon active name="cart" />
                    </Button>
                </Right>
            </CardItem>
        </Card >
    );
}
