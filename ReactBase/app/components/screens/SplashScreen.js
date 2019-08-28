import React, { Component } from 'react';
import { StyleSheet,View, Text, Image } from 'react-native';
import windowSize from 'react-native';

class SplashPage extends Component {

    componentWillMount() {
        //var navigator = this.props.navigator;
        setTimeout(() => {
            // navigator.replace({
            //     id: 'NavScreen1', //<-- This is the View you go to
            // });
            this.props.navigation.navigate('NavScreen1')
        }, 1000);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{width: 500, height: 1000}}
                    source={require('../../assets/images/splash.png')}
                />
            </View>
        );
    }
}

module.exports = SplashPage;