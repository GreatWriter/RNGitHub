import React, {PureComponent} from 'react'
import {
    Image,
    StyleSheet
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import HotPage from '../page/PopularPage'
import TrendingPage from '../page/TrendingPage'
import MyPage from '../page/MyPage'

export default class MianTab extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: ''
        }
    }

    render() {
        return (
            <TabNavigator>
                {this._renderTabarItems('热门', require("../../res/images/ic_polular.png"), require("../../res/images/ic_polular.png"), HotPage)}
                {this._renderTabarItems('趋势', require("../../res/images/ic_trending.png"), require("../../res/images/ic_trending.png"), TrendingPage)}
                {this._renderTabarItems('我的', require("../../res/images/ic_my.png"), require("../../res/images/ic_my.png"), MyPage)}
            </TabNavigator>
        );
    }

    _renderTabarItems(selectedTab, icon, selectedIcon, Component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={selectedTab}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={icon}/>}
                renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon}/>}
                onPress={() => this.setState({selectedTab: selectedTab})}
            >
                <Component navigation={this.props.navigation}/>
            </TabNavigator.Item>
        )

    }

}

const styles = StyleSheet.create({
    tabText: {
        color: '#515151',
        fontSize: 12
    },
    selectedTabText: {
        color: '#d81e06'
    },
    icon: {
        width: 25,
        height: 25,
        marginBottom: -3
    }
});
