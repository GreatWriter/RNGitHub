import React, {Component} from "react";
import {
    Text,
    View,
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
export default class TrendingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                >
                    <Text tabLabel="Qab 1">Tab1</Text>
                    <Text tabLabel="Qab 2">Tab2</Text>
                    <Text tabLabel="Qab 3">Tab3</Text>
                    <Text tabLabel="Qab 4">Tab4</Text>
                    <Text tabLabel="Qab 5">Tab5</Text>
                </ScrollableTabView>
        );
    }
}