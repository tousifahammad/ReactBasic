import React from 'react';
// import HomeScrn from './HomeScrn'
import HomeScreen from './HomeScreen'
import { Button, View, Text } from 'react-native';

export default class HomeController extends React.Component {
    languageList =  [   { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                        { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                        { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                        { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
                        { key: 'Perl' }, { key: 'Sap 2' }, { key: 'Python 2' },
                        { key: 'Ajax 2' }, { key: 'C++ 2' }, { key: 'Ruby 2' },
                        { key: 'Rails 2' }, { key: '.Net Core' }, { key: 'react native' }
                    ];

    constructor(props) {
        super(props)

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        this.props.navigation.navigate('NavScreen3')
    }

  
    render() {   
        return (
            <View>
                <HomeScreen greetHandler = {this.greetParent} languageList = {this.languageList} />
            </View>
    );
  }
}