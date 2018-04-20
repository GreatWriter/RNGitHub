// import React from 'react';
// import {Button, View, Text, Image, StyleSheet, StatusBar} from 'react-native';
// // import {StackNavigator} from 'react-navigation'; // Version can be specified in package.json
// import TabNavigator from 'react-native-tab-navigator';
//
// export default class MainPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {selectedTab: 'home'};
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//
//                 <StatusBar
//                     animated={true}
//                     hidden={false}
//                     backgroundColor={'blue'}
//                     translucent={true}
//                     barStyle={'default'}
//                     showHideTransition={'fade'}
//                     networkActivityIndicatorVisible={true}
//                 />
//
//                 <TabNavigator>
//                     <TabNavigator.Item
//                         selected={this.state.selectedTab === 'home'}
//                         title="Home"
//                         badgeText="1"
//                         renderIcon={() =>
//                             <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
//                         renderSelectedIcon={() =>
//                             <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
//                         onPress={() => this.setState({selectedTab: 'home'})}>
//                         <View style={styles.page1}>
//
//                         </View>
//                     </TabNavigator.Item>
//                     <TabNavigator.Item
//                         selected={this.state.selectedTab === 'profile'}
//                         title="Profile"
//                         renderIcon={() => <Image style={styles.image}
//                                                  source={require('../../res/images/ic_polular.png')}/>}
//                         renderSelectedIcon={() =>
//                             <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
//
//                         onPress={() => this.setState({selectedTab: 'profile'})}>
//                         <View style={styles.page2}>
//
//                         </View>
//                     </TabNavigator.Item>
//                 </TabNavigator>
//             </View>
//         );
//     }
// }
//
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//
// });
