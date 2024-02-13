

import "react-native-gesture-handler";
import { View, Text, Image,StyleSheet } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
// import { NavigationContainer} from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import fs from "./assets/fs.png";
import Logout from "./screens/Logout";
 import Event from "./screens/Event";
import Notification from "./screens/Contact Us";
import Card from "./screens/About";
import BuildingMap from "./screens/BuildingMap";



const Drawer = createDrawerNavigator();

export default function Faculte() {
  return (
    
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 250,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                    
                  }}
                >
                  <Image
                    source={fs}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius:7
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Faculty of Sciences </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >El Jadida</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#00b386",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Destination"
          options={{
            drawerLabel: "Destination",
            title: "Choice your destination",
            drawerIcon: () => (
              // <SimpleLineIcons name="home" size={20} color="#808080" />
              <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color="black" />
            )
          }}
          component={BuildingMap}
        />
         
           <Drawer.Screen
          name="event"
          options={{
            drawerLabel: "Event",
            title: "Event",
            drawerIcon: () => (
              <MaterialIcons name="event" size={20} color="#808080" />
            )
          }}
          component={Event}
          /> 
<Drawer.Screen
          name="About"
          options={{
            drawerLabel: "About Fsj",
            title: "General Framework of the Faculty",
            drawerIcon: () => (
              <MaterialIcons name="event" size={20} color="#808080" />
            )
          }}
          component={Card}
          /> 
        {/* <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={Settings}
        /> */}

       
        <Drawer.Screen
          name="Contact Us"
          options={{
            drawerLabel: "Contact Us",
            title: "Contact Us",
            drawerIcon: () => (
              <MaterialIcons name="contact-mail" size={20} color="#808080" />
            )
          }}
          component={Notification}
        />
  
           <Drawer.Screen
          name="Logout"
          options={{
            drawerLabel: "Logout",
            title: "Logout",
            
            drawerIcon: () => (
              <MaterialIcons name="logout" size={20} color="#808080" />
            )
            
          }}
          component={Logout}
        />
      </Drawer.Navigator>
     
 
  );
}

styles = StyleSheet.create({
    container: {
      visibility:"hidden"
    },
    
  });
