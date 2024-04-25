import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function FirstP({ navigation }) {
  const checkToken = async () => {
    try {
      // await AsyncStorage.removeItem("token");
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("Gestion");
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du token :", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={require("../assets/bl.png")}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Welcome to {"\n"}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Blood Donation</Text>
            </View>
          </Text>
          <Text style={styles.text}>
            Book and manage your appointments to donate blood
          </Text>
        </View>

        <TouchableOpacity onPress={checkToken}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>book an appointment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: Dimensions.get("screen"),
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#281b52",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "400",
    color: "#9992a7",
    textAlign: "center",
  },
  /** Hero */
  hero: {
    // backgroundColor: '#c6ecd9',
    margin: 20,
    borderRadius: 20,
    padding: 0,
  },
  heroImage: {
    width: "100%",
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: "#fff2dd",
    transform: [
      {
        rotate: "-5deg",
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#281b52",
  },
  /** Button */
  button: {
    backgroundColor: "#cc0d00",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
