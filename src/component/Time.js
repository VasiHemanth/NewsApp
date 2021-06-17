import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import moment from 'moment';

export class Time extends Component {
    
    constructor(props) {
        super(props);
        this.date=props.time;
    }

    render(){
        const time = moment(this.date || moment.now()).fromNow();

        return (
            <View>
                <Text style={{color:'#555'}}>{time}</Text>
            </View>
        )
    }



}

export default Time
