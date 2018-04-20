/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image style={styles.bottomImage} source={require('../res/images/ic_polular.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.bottomImage} source={require('../res/images/ic_polular.png')}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <View style={styles.page1}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image style={styles.bottomImage} source={require('../res/images/ic_trending.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.bottomImage} source={require('../res/images/ic_trending.png')}/>}
                    // renderBadge={() => <CustomBadgeView/>}
                    onPress={() => this.setState({selectedTab: 'profile'})}>
                    <View style={styles.page2}></View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    bottomImage: {
        height: 22,
        width: 22,
    },

});
