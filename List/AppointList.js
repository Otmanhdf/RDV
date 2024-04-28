import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { API_URL } from "../config/ConfigApi";

const CARD_WIDTH = Math.min(Dimensions.get("screen").width * 1 - 20, 400);

export default function AppointList({ navigation }) {
  const [rendezvous, setRendezVous] = useState([]);
  const [etat, setEtat] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get(`${API_URL}/rendu-vous`, config);
        setRendezVous(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    const unsubscribe = navigation.addListener("focus", () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  const changerEtat = async (id, etat) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.patch(
        `${API_URL}/rendu-vous/${id}`,
        {
          etat: etat,
        },
        config
      );

      if (response.data.etat == "0") {
        Alert.alert("Update", "  Accept This Appointement  .");
      }
      if (response.data.etat == "2") {
        Alert.alert("Update", " Denied This appointement .");
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FBFCFF" }}>
      <View style={styles.container}>
        <View style={styles.list}>
          <View style={styles.listHeader}></View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            showsHorizontalScrollIndicator={false}
          >
            {rendezvous &&
              rendezvous.map(
                ({ centre, creneau, date, etat, id, user }, index) => (
                  <View style={styles.card} key={index}>
                    <View style={styles.cardTop}>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.cardIcon}>
                          <FeatherIcon color="#000" name="calendar" size={24} />
                        </View>

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>
                            {user.nom} {user.prenom}
                          </Text>

                          <Text style={styles.cardSubtitle}>
                            {centre.label}
                          </Text>
                        </View>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View style={styles.cardIcon}>
                          <TouchableOpacity
                            onPress={() => changerEtat(id, "0")}
                          >
                            <FeatherIcon
                              color="green"
                              name="check-circle"
                              size={24}
                            />
                          </TouchableOpacity>
                        </View>

                        <View style={styles.cardIcon}>
                          <TouchableOpacity
                            onPress={() => changerEtat(id, "2")}
                          >
                            <FeatherIcon color="red" name="x" size={24} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>

                    <View style={styles.cardFooter}>
                      <Text style={styles.cardFooterText}>
                        {date.split("T")[0]}{" "}
                      </Text>

                      <Text style={styles.cardFooterText}>
                        {creneau.hourStart}
                      </Text>
                    </View>
                  </View>
                )
              )}
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
    fontSize: 32,
    fontWeight: "700",
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
    marginVertical: 10,
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
    justifyContent: "space-between",
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff1f5",
    margin: 5,
  },
  cardBody: {
    paddingLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 18,
    color: "#121a26",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
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
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 18,
    color: "black",
  },
});
