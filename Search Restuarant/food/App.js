const { createAppContainer } = require("react-navigation");
const { createStackNavigator } = require("react-navigation-stack");
const { default: SearchSceen } = require("./src/screens/Search");
import SearchBar from "./src/components/SearchBar";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigate = createStackNavigator(
  {
    search: SearchSceen,
    SearchBar: SearchBar,
    ResultShow: ResultShowScreen,
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "BisinessSearch",
    },
  }
);

export default createAppContainer(navigate);
