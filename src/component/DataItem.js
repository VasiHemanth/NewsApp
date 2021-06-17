import React, {Component} from 'react';
import { Button } from 'react-native';
import { ListItem, Left, Body, Right, Thumbnail, Text, View } from 'native-base'
import { render } from 'react-dom';

import Time from './Time';

export default  class DataItem extends Component { 
    
    constructor(props) {
        super(props);
        this.data=props.data;
    }

    handlePress = () => {
        const { url, title } = this.data;
        this.props.onPress({url, title})
    }

    render() {
        return(
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{uri: this.data.urlToImage != null 
                    ? this.data.urlToImage : 'https://picsum.photos/200/300' }} />
                </Left>
                <Body>
                    <Text>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View style={{ flex:1, flexdirection:'row', margintop:8, marginleft:0,}}>
                        <Text style={{color:'#444'}}>{this.data.source.name}</Text>
                        <Time time={this.data.publishedAt} />
                    </View>
                </Body>
                <Right>
                    <Button onPress ={this.handlePress}  title='View'>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        )
    }
} 
