import React from 'react';
import HomePage from './page/HomePage';
import FindPage from './page/FindPage';
import MinePage from './page/MinePage';
// import {TabNavigator} from "react-navigation";
import {
    Image,
} from 'react-native';

const RouteConfigs = {
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            title: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../res/images/ic_polular.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }),
    },
    Find: {
        screen: FindPage,
        navigationOptions: ({navigation}) => ({
            title: '发现',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../res/images/ic_trending.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }),
    },
    Mine: {
        screen: MinePage,
        navigationOptions: ({navigation}) => ({
            title: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../res/images/ic_my.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        }),
    },
};

export default RouteConfigs;