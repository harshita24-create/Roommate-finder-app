// App.js
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthProvider } from "./src/Context/AuthContext";
import Appstack from "./src/navigation/Appstack";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F9F4FB", // pastel background
    primary: "#7E57C2", // purple
    card: "#E6DFF3",    // soft pastel card
    text: "#2D2D2D",     // dark text
    border: "#C3B1E1",   // lighter purple border
  },
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={MyTheme}>
        <Appstack />
      </NavigationContainer>
    </AuthProvider>
  );
}

