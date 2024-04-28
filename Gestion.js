import "react-native-gesture-handler";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import bd from "./assets/bd.png";

import Users from "./Rdv/Users";
import Settings from "./screens/Settings";
import Centers from "./List/Centers";

import Guidance from "./screens/Guidance";
import { useEffect, useState } from "react";
import AppointList from "./List/AppointList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "./config/ConfigApi";
import axios from "axios";
import MyAppointment from "./screens/MyAppointment";

const Drawer = createDrawerNavigator();

const userlist = [
  {
    name: "Guidance",
    drawerLabel: "Guidance",
    title: "Guidance",
    drawerIcon: () => (
      <MaterialCommunityIcons
        name="book-information-variant"
        size={24}
        color="black"
      />
    ),

    component: Guidance,
  },
  {
    name: "Centers",
    drawerLabel: "Centers",
    title: "Choose  center",
    drawerIcon: () => (
      <MaterialCommunityIcons name="select-place" size={24} color="black" />
    ),
    component: Centers,
  },
  {
    name: "MyAppointment",
    drawerLabel: "MyAppointment",
    title: "MyAppointment",
    drawerIcon: () => (
      <MaterialCommunityIcons name="calendar" size={24} color="black" />
    ),
    component: MyAppointment,
  },
];
const adminlist = [
  {
    name: "Users",
    drawerLabel: "Users",
    title: "Users list",
    drawerIcon: () => <FontAwesome5 name="users" size={24} color="black" />,
    component: Users,
  },

  {
    name: "AppointList",
    drawerLabel: "AppointList",
    title: "Appointment List",
    drawerIcon: () => (
      <FontAwesome5 name="clipboard-list" size={24} color="black" />
    ),

    component: AppointList,
  },
];
export default function Gestion() {
  const [drawerlist, setdrawerlist] = useState(userlist);
  const [isadmin, setIsadmin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get(`${API_URL}/users/myuser`, config);

        if (response.data.role === "admin") {
          setdrawerlist(adminlist);
        } else {
          setdrawerlist(userlist);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 250,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#ffe6e6",
                borderBottomWidth: 1,
              }}
            >
              <Image
                source={bd}
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 7,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginVertical: 3,
                  fontWeight: "bold",
                  color: "#111",
                }}
              ></Text>

              <Image
                alt=""
                resizeMode="contain"
                style={styles.headerImg}
                source={require("./assets/gb.png")}
              ></Image>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#e63900",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          color: "#111",
        },
      }}
    >
      {drawerlist.map((item, index) => {
        return (
          <Drawer.Screen
            name={item.name}
            options={{
              drawerLabel: item.drawerLabel,
              title: item.title,
              drawerIcon: item.drawerIcon,
            }}
            key={index}
            component={item.component}
          />
        );
      })}

      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",

          drawerIcon: () => (
            <AntDesign name="profile" size={24} color="black" />
          ),
        }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
}

styles = StyleSheet.create({
  container: {
    visibility: "hidden",
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 40,
  },
  headerImg: {
    width: 200,
    height: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
});
