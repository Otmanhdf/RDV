import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/ConfigApi";
import axios from "axios";

const CARD_WIDTH = Math.min(Dimensions.get("screen").width * 1 - 20, 400);

export default function Users({ navigation }) {
  const [user, setUser] = useState();
  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(`${API_URL}/users`, config);
      setUser(response.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to reload data when navigating back to the page
  const reloadData = () => {
    fetchData();
  };

  // useEffect to reload data when navigating back to the page
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      reloadData();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBFCFF" }}>
      <View style={styles.container}>
        <View style={styles.list}>
          <View style={styles.listHeader}></View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            showsHorizontalScrollIndicator={false}
          >
            {user &&
              user.filter(({ role }) => role === "user").map(({ id, nom, prenom, email, phone }, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate("Details", {
                      nom: nom,
                      prenom: prenom,
                      email: email,
                      phone:phone,
                      id: id,
                    });
                  }}
                >
                  <View style={styles.card}>
                    <View style={styles.cardTop}>
                      <View
                        style={{
                          backgroundColor: "#fff",
                          height: 50,
                          width: 50,
                          borderRadius: 5,
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

                      <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{nom}</Text>

                        <Text style={styles.cardSubtitle}>{prenom}</Text>
                      </View>
                    </View>

                    <View style={styles.cardFooter}>
                      <Text style={styles.cardFooterText}>{email}</Text>

                      <Text style={styles.cardFooterText}>{phone}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    paddingHorizontal: 24,
    fontSize: 20,
    fontWeight: "500",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  /** List */
  list: {
    marginBottom: 24,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22,
    color: "#121a26",
  },
  listAction: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#778599",
  },
  listContent: {
    gap: 10,
    paddingHorizontal: 5,
  },
  /** Card */
  card: {
    width: CARD_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#e1e1e1",
    marginHorizontal: 6,
    shadowColor: "#90a0ca",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff1f5",
  },
  cardBody: {
    paddingLeft: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 18,
    color: "#121a26",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    color: "#121a26",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  cardFooterText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    color: "#555",
  },
});
