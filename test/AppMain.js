import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import {StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation';

// import StackNavigatorConfig from "../test/StackNavigatorConfig";
// import RouteConfigs from "../test/RouteConfigs";
import DetailsTest from "./page/DetailsTest";
import Tab from './Tab';


// export default class AppMain extends Component {
//
//     render() {
//         return (
//             <Navigator/>
//         );
//     }
//
// }

// 创建导航器，传入路由配置和导航配置
export default Navigator = StackNavigator({
    Tab: {
        screen: Tab,
    },
    // Details: {
    //     screen: DetailsTest,
    // },
});

