import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import index from "./src/screen";
import { BlogProvider } from "./src/context/BlogProvider";

const navigator = createStackNavigator({
  Index : index
}, {
  initialRouteName: "Index", 
  defaultNavigationOptions : {
    title: 'Blogs'
  }
})


const App = createAppContainer(navigator)


export default () => {
  return <BlogProvider >
  <App />
  </BlogProvider>
}