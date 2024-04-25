import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import FeatherIcon from "react-native-vector-icons/Feather";
import { API_URL } from "../config/ConfigApi";

const prof = [
  {
    fname: "Blood",
    lname: "transfusion",
  },
];
export default function AdminProfile({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get(`${API_URL}/users`, config);
        // setUser(response.data);r
        console.log(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    fetchData();
  }, []);

  const handlerLogOut = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        {user !== null ? (
          <ScrollView contentContainerStyle={styles.content}>
            <View style={[styles.section, { paddingTop: 4 }]}>
              <Text style={styles.sectionTitle}>Account</Text>

              <View style={styles.sectionBody}>
                <View style={styles.card}>
                  <View
                    style={{
                      backgroundColor: "#b45a5a",
                      height: 50,
                      width: 50,
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{ color: "#f4f4f4" }}
                    >{`${user.nom[0]}${user.prenom[0]}`}</Text>
                  </View>
                  <View style={styles.profileBody}>
                    <Text style={styles.cardTitle}>
                      {user.nom + " " + user.prenom}
                    </Text>

                    <Text style={styles.profileHandle}>{user.email}</Text>
                  </View>

                  {/* <FeatherIcon color="#bcbcbc" name="chevron-right" size={22} /> */}
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Personal information</Text>

              <View style={styles.sectionBody}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                  <View
                    // onPress={() => {
                    //   // handle onPress
                    // }}
                    style={styles.row}
                  >
                    <Text style={styles.rowLabel}>Firstname</Text>

                    <View style={styles.rowSpacer} />

                    <Text style={styles.rowValue}>{user.prenom}</Text>

                    {/* <FeatherIcon color="#bcbcbc" name="chevron-right" size={19} /> */}
                  </View>
                </View>

                <View style={styles.rowWrapper}>
                  <View
                    // onPress={() => {
                    //   // handle onPress
                    // }}
                    style={styles.row}
                  >
                    <Text style={styles.rowLabel}>lastname</Text>

                    <View style={styles.rowSpacer} />

                    <Text style={styles.rowValue}>{user.nom}</Text>

                    {/* <FeatherIcon color="#bcbcbc" name="chevron-right" size={19} /> */}
                  </View>
                </View>
                <View style={styles.rowWrapper}>
                  <View
                    // onPress={() => {
                    //   // handle onPress
                    // }}
                    style={styles.row}
                  >
                    <Text style={styles.rowLabel}>Phone</Text>

                    <View style={styles.rowSpacer} />

                    <Text style={styles.rowValue}>(+212) {user.phone}</Text>

                    {/* <FeatherIcon color="#bcbcbc" name="chevron-right" size={19} /> */}
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Login Information</Text>

              <View style={styles.sectionBody}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}
                  >
                    <Text style={styles.rowLabel}>Email</Text>

                    <View style={styles.rowSpacer} />
                    <Text style={styles.rowValue}>{user.email}</Text>

                    <FeatherIcon
                      color="#bcbcbc"
                      name="chevron-right"
                      size={19}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}
                  >
                    <Text style={styles.rowLabel}>Update password</Text>

                    <View style={styles.rowSpacer} />

                    <FeatherIcon
                      color="#bcbcbc"
                      name="chevron-right"
                      size={19}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionBody}>
                <View
                  style={[
                    styles.rowWrapper,
                    styles.rowFirst,
                    styles.rowLast,
                    { alignItems: "center" },
                  ]}
                >
                  <TouchableOpacity onPress={handlerLogOut} style={styles.row}>
                    <Text style={[styles.rowLabel, styles.rowLabelLogout]}>
                      Log Out
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (
          <ActivityIndicator></ActivityIndicator>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
  },
  /** Content */
  content: {
    paddingHorizontal: 16,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    color: "#a69f9f",
  },
  /** Section */
  section: {
    paddingVertical: 12,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: "500",
    color: "#a69f9f",
    textTransform: "uppercase",
  },
  sectionBody: {
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  /** Profile */
  profile: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card: {
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  profileBody: {
    marginRight: "auto",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#292929",
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "400",
    color: "#858585",
  },
  /** Row */
  row: {
    height: 44,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: "#000",
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ababab",
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowLabelLogout: {
    width: "100%",
    textAlign: "center",
    fontWeight: "600",
    color: "#dc2626",
  },
});
