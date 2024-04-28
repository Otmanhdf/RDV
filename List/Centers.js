import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import DropdownFilter from "./DropdownFilter";
import FeatherIcon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/ConfigApi";
import axios from "axios";

const Centers = ({ navigation }) => {
  const [selectedvalueRegion, setSelectedValueRegion] = useState();
  const [regions, setRegions] = useState([]);
  const [centres, setCentres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token} ` },
        };
        const response = await axios.get(`${API_URL}/region`, config);
        setRegions(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <DropdownFilter
          regions={regions}
          setCentres={setCentres}
          setSelectedValueRegion={setSelectedValueRegion}
          selectedvalueRegion={selectedvalueRegion}
        ></DropdownFilter>
        <ScrollView contentContainerStyle={styles.container}>
          {centres &&
            centres.map((centre, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate("Appointment", {
                      backto: "home",
                      centre: centre,
                    });
                  }}
                >
                  <View style={styles.card}>
                    <View style={styles.cardBody}>
                      <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>{centre.label}</Text>
                      </View>

                      <View style={styles.cardStats}>
                        <View style={styles.cardStatsItem}>
                          <FeatherIcon color="#48496c" name="user" size={14} />

                          <Text style={styles.cardStatsItemText}>
                            {centre.size} Blood donor
                          </Text>
                        </View>

                        <View style={styles.cardStatsItem}>
                          <Text style={styles.cardStatsItemText}>
                            {centre.id}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.cardFooter}>
                        <Text style={styles.cardFooterText}>
                          {selectedvalueRegion},
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Centers;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 12,
  },
  /** Card */
  card: {
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardBody: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "flex-start",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#2d2d2d",
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444",
  },
  cardStats: {
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: -12,
  },
  cardStatsItem: {
    paddingHorizontal: 12,
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  cardStatsItemText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#48496c",
    marginLeft: 4,
  },
  cardFooter: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: "#e9e9e9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardFooterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#909090",
  },
});
