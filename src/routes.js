import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Principal from "./pages/Principal";


const Routes = createAppContainer(
  createStackNavigator(
    {
      Principal: {
        screen: Principal
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