import React, { Component } from 'react';
//import react in our code.
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    Text,
} from 'react-native';
// import all basic components

//Import required react-navigation component
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

//Import all the screens
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import HomeController from '../screens/home/HomeController';

//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
    //Top Navigation Header with Donute Button
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../../assets/icons/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

//Stack Navigator for the First Option of Navigation Drawer
// const FirstActivity_StackNavigator = createStackNavigator({
//     //All the screen from the First Option will be indexed here
//     First: {
//         screen: LoginScreen,
//         navigationOptions: ({ navigation }) => ({
//             title: 'Login Screen',
//             headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//             headerStyle: {
//                 backgroundColor: '#BCADB8',
//             },
//             headerTintColor: '#fff',
//         }),
//     },
// });

//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Second Option will be indexed here
    Second: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Third Option will be indexed here
    Third: {
        screen: DetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Details Screen',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen4_StackNavigator = createStackNavigator({
    //All the screen from the Third Option will be indexed here
    Third: {
        screen: HomeController,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Controller',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
    {
        //Drawer Optons and indexing
        NavScreen0: {
            screen: SplashScreen,
            navigationOptions: {
                drawerLabel: 'Splash Screen',
                drawerLockMode: 'locked-closed',
            },
        },
        NavScreen1: {
            screen: LoginScreen,
            navigationOptions: {
                drawerLabel: 'Login Screen',
                drawerLockMode: 'locked-closed',
            },
        },
        NavScreen2: {
            screen: Screen2_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Home Screen',
            },
        },
        NavScreen3: {
            screen: Screen3_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Details Screen',
            },
        },

        NavHome: {
            screen: Screen4_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Home Controller',
            },
        },
    },
    {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
        contentComponent: CustomSidebarMenu,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 130,
    },
    {
        initialRouteName: 'NavScreen0',
    }
);
export default createAppContainer(DrawerNavigatorExample);
