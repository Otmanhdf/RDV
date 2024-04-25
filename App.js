import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Authentification/Login";
import Gestion from "./Gestion";
import SignUp from "./Authentification/SignUp";
import FirstP from "./screens/FirstP";
import Guidance from "./screens/Guidance";
import BeforeD from "./screens/BeforeD";
import AfterD from "./screens/AfterD";
import Type from "./screens/Type";
import Details from "./List/Details";
import UpdateUsers from "./Rdv/UpdateUsers";
import Appointment from "./Rdv/Appointment";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstP">
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Gestion"
          options={{ headerShown: false }}
          component={Gestion}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name="FirstP"
          options={{ headerShown: false }}
          component={FirstP}
        />
        <Stack.Screen
          name="Guidance"
          options={{ headerShown: false }}
          component={Guidance}
        />
        <Stack.Screen
          name="BeforeD"
          options={{ headerShown: false }}
          component={BeforeD}
        />
        <Stack.Screen
          name="AfterD"
          options={{ headerShown: false }}
          component={AfterD}
        />
        <Stack.Screen
          name="Type"
          options={{ headerShown: false }}
          component={Type}
        />
        <Stack.Screen
          name="Details"
          options={{
            headerStyle: {
              backgroundColor: "red", // Couleur de fond de la barre de navigation
            },
            headerTintColor: "#fff", // Couleur du texte de la barre de navigation
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={Details}
        />
        <Stack.Screen
          name="UpdateUsers"
          options={{ headerShown: false }}
          component={UpdateUsers}
        />

        <Stack.Screen
          name="Appointment"
          options={{
            headerStyle: {
              backgroundColor: "red", // Couleur de fond de la barre de navigation
            },
            headerTintColor: "#fff", // Couleur du texte de la barre de navigation
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={Appointment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
