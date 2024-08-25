const { createAppContainer } = require("react-navigation");
const { createStackNavigator } = require("react-navigation-stack");
const { default: SearchSceen } = require("./src/screens/Search");


const navigate = createStackNavigator({
  search : SearchSceen
}, {
  initialRouteName : 'search',
  defaultNavigationOptions: {
    title: 'BisinessSearch'
  }
})

export default createAppContainer(navigate)