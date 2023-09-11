import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Principal from "./pages/Principal";
import Login from "./pages/Login";
import Destino from "./pages/Destino";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login
      },Principal: {
        screen: Principal,
        navigationOptions: {
          title: "Home"
        }
      },Destino: {
        screen: Destino,
        navigationOptions: {
          title: "Home"
        }
      }
    },    
    {
      defaultNavigationOptions: {
        headerLayoutPreset: "center",
        headerStyle: {
          backgroundColor: "#7d40e7"
        },
        headerBackTitleVisible: false,
        headerTintColor: "#fff"
      }
    }
  )
);
export default Routes;