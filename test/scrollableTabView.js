import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';

// export default () => {
//     return
//
//     <ScrollableTabView
//         style={{marginTop: 20,}}
//         initialPage={0}
//         renderTabBar={() => <ScrollableTabBar/>}
//     >
//         <Text tabLabel='Tab #1'>My</Text>
//         <Text tabLabel='Tab #2'>favorite</Text>
//         <Text tabLabel='Tab #3'>project</Text>
//         <Text tabLabel='Tab #4'>favorite</Text>
//         <Text tabLabel='Tab #5'>project</Text>
//     </ScrollableTabView>;
// }

export default class scrollableTabView extends Component {

    render() {
        return <ScrollableTabView
            style={{marginTop: 20,}}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar/>}
        >
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
            <Text tabLabel='Tab #4'>favorite</Text>
            <Text tabLabel='Tab #5'>project</Text>
            <Text tabLabel='Tab #6'>project</Text>
            <Text tabLabel='Tab #7'>project</Text>
            <Text tabLabel='Tab #8'>project</Text>
        </ScrollableTabView>;
    }
}