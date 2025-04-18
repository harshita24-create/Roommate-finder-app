
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/App/HomeScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: "Dashboard", headerStyle: { backgroundColor: "#B39DDB" }, headerTintColor: "#fff" }} 
      />
    </Stack.Navigator>
  );
};

export default AppStack;

