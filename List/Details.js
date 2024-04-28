import React from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Alert,
} from "react-native";
// import FeatherIcon from "react-native-vector-icons/Feather";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { API_URL } from "../config/ConfigApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
const CARD_WIDTH = Math.min(Dimensions.get("screen").width * 0.75, 400);

export default function Details({ route, navigation }) {
  const { nom, prenom, email,phone, id } = route.params;

  const handleDelete = async (id) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token} ` },
      };

      await axios.delete(`${API_URL}/rendu-vous/user/${id}`, config);
      await axios.delete(`${API_URL}/users/${id}`, config);
      navigation.navigate("Users")
    } catch (error) {
      console.error("Error during user login :", error);
      Alert.alert("Error", error);
    }
  };

  const handleAsAdmin = async (id, role = "admin") => {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await axios.patch(
        `${API_URL}/users/${id}`,
        { role }, // Pass the new role in the request body
        config
      );
      AsyncStorage.setItem("token", response.data);
      if (response.data) Alert.alert("Set", "Now this user become Admin");
      // console.log(response.data);
    } catch (error) {
      console.error("Error during user login :", error);
      Alert.alert("Error", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.profile}>
              <View style={styles.profileTop}>
                <View style={styles.cardTop}>
                  <View
                    style={{
                      backgroundColor: "#f2f3f7",
                      height: 60,
                      width: 60,
                      borderRadius: 4,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "#555", fontWeight: "bold" }}>
                      {nom &&
                        prenom &&
                        nom[0].toUpperCase() + prenom[0].toUpperCase()}
                    </Text>
                  </View>

                  <View style={styles.avatarNotification} />
                </View>

                <View style={styles.profileBody}>
                  <Text style={styles.profileTitle}>
                    {nom} {prenom}
                  </Text>

                  <Text style={{ color: "#121a26" }}>{email}</Text>
                </View>
              </View>
            </View>

            <View style={styles.contentActions}>
              <TouchableOpacity
                onPress={() => {
                  handleDelete(id);
                }}
                style={{ flex: 1, paddingHorizontal: 6 }}
              >
                <View style={styles.btn}>
                  <AntDesign name="deleteuser" size={24} color="black" />
                  <Text style={styles.btnText}> Delete</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("UpdateUsers", {
                    nom: nom,
                    prenom: prenom,
                    email: email,
                    phone:phone,
                    id: id,
                  });
                }}
                style={{ flex: 1, paddingHorizontal: 6 }}
              >
                <View style={styles.btnPrimary}>
                  <Text style={styles.btnPrimaryText}>Update</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  handleAsAdmin(id);
                }}
                style={{ flex: 1, paddingHorizontal: 5 }}
              >
                <View style={styles.btnP}>
                  <Text style={styles.btnPrimaryText}>Set as admin</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

  /** Content */
  content: {
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  contentActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    marginHorizontal: -6,
    marginBottom: 0,
  },
  /** Profile */
  profile: {
    paddingTop: 4,
    paddingBottom: 16,
  },
  profileTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  profileBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingLeft: 16,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 32,
    color: "#121a26",
    marginBottom: 6,
    marginVertical: 9,
  },
  profileSubtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#778599",
  },
  profileDescription: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    color: "#778599",
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    fontSize: 30,
  },
  //
  /** Avatar */
  avatar: {
    position: "relative",
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  avatarNotification: {
    position: "absolute",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#fff",
    bottom: 0,
    right: -2,
    width: 21,
    height: 21,
    backgroundColor: "#22C55E",
  },

  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,

    paddingHorizontal: 16,
    borderWidth: 2,
    backgroundColor: "transparent",
    borderColor: "#ff4032",
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    color: "#ff4032",
  },
  btnPrimary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    backgroundColor: "#ff4032",
    borderColor: "#ff4032",
  },
  btnPrimaryText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    color: "#fff",
  },

  btnP: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingTop: 10,
    paddingHorizontal: 16,
    borderWidth: 2,
    marginTop: 20,
    backgroundColor: "#ff4032",
    borderColor: "#ff4032",
  },
});
