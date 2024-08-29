import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import index from "./src/screen";
import { Provider } from "./src/context/BlogProvider";
import ShowScreen from "./src/screen/ShowScreen";
import CreateScreen from "./src/screen/CreateScreen";
import EditScreen from "./src/screen/EditScreen";

const navigator = createStackNavigator({
  Index : index,
  Show : ShowScreen,
  Create : CreateScreen,
  Edit: EditScreen

}, {
  initialRouteName: "Index", 
  defaultNavigationOptions : {
    title: 'Blogs'
  }
})


const App = createAppContainer(navigator)


export default () => {
  return <Provider >
  <App />
  </Provider>
}