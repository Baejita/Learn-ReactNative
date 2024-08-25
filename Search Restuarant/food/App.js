const { createAppContainer } = require("react-navigation");
const { createStackNavigator } = require("react-navigation-stack");
const { default: SearchSceen } = require("./src/screens/Search");
import SearchBar from "./src/components/SearchBar";

const navigate = createStackNavigator(
  {
    search: SearchSceen,
    SearchBar: SearchBar,
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "BisinessSearch",
    },
  }
);

export default createAppContainer(navigate);
