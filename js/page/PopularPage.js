import React, {Component} from "react";
import {
    Text,
    View,
    Alert,
    ListView,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import DataRepository from '../expand/dao/DataRepository';
import RepositoryCell from '../common/RepositoryCell';


const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <ScrollableTabView
                tabBarBackgroundColor='#2196F3'
                renderTabBar={() => <ScrollableTabBar/>}
            >
                <PopularTab tabLabel='Java'>Java</PopularTab>
                <PopularTab tabLabel='ios'>ios</PopularTab>
                <PopularTab tabLabel='php'>php</PopularTab>
            </ScrollableTabView>
        );
    }
}


class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.dataRespository = new DataRepository();
        this.state = {
            result: '',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let url = URL + this.props.tabLabel + QUERY_STR;
        this.dataRespository
            .fetchNetRepository(url)
            .then(result => {
                // Alert.alert(JSON.stringify(result));
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result.items),
                });
            }).catch(error => {
            console.log(error);
        });
    }

    renderRow(data) {
        return (<RepositoryCell data={data}/>);
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) => this.renderRow(data)}
                />
            </View>
        );
    }
}