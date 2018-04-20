import {TabBarBottom, TabNavigator} from "react-navigation";
// import FindPage from "./page/FindPage";
// import HomePage from "./page/HomePage";
// import MinePage from "./page/MinePage";
import RouteConfigs from "./RouteConfigs";
import StackNavigatorConfig from "./StackNavigatorConfig";

const Tab = TabNavigator(RouteConfigs, StackNavigatorConfig);

// export default RouteConfigs = {
//     Home: {
//         screen: HomePage,
//         navigationOptions: ({navigation}) => ({
//             title: '首页',
//         }),
//     },
//     Find: {
//         screen: FindPage,
//         navigationOptions: ({navigation}) => ({
//             title: '发现',
//         }),
//     },
//     Mine: {
//         screen: MinePage,
//         navigationOptions: ({navigation}) => ({
//             title: '我的',
//         }),
//     },
// };
//
// export default StackNavigatorConfig = {
//     initialRouteName: 'Home',
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     lazy: true,
// };


export default Tab;