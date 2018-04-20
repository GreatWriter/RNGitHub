import {TabNavigator} from "react-navigation";
import RouteConfigs from "./RouteConfigs";
import StackNavigatorConfig from "./StackNavigatorConfig";

const Tab = TabNavigator(RouteConfigs, StackNavigatorConfig);

export default Tab;