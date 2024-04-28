import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

// import FeatherIcon from "react-native-vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/ConfigApi";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";

const Appointment = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [slectedSlot, setSlectedSlot] = useState("");
  const [user, setUser] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);

  const getAvailableSlotsForDate = async (selectedDate) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(
        ` ${API_URL}/creneau/jour/${selectedDate.getDay()}`,
        config
      );
      setAvailableSlots(response.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const response = await axios.get(`${API_URL}/users/myuser`, config);
        setUser(response.data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    getAvailableSlotsForDate(date);
    fetchData();
  }, [date]);

  const handleSubmit = async () => {
    const { centre } = route.params;

    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`${API_URL}/rendu-vous`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          date: date,
          etat: "1",
          centre: centre,
          creneau: slectedSlot,
          user: user,
        }),
      });
      if (response.ok) {
        showMessage({
          message: "Appointmenet added with success",
          type: "success",
        });

        setTimeout(() => {
          navigation.navigate("MyAppointment");
        }, 1000);
      }
      if (!response.ok) Alert.alert("Error", "Appointment is denied");
      // console.log(response.status);
    } catch (error) {
      console.error("Error recording appointment :", error);
    }
  };

  const handleReset = () => {
    setDate(new Date());
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View
              style={[styles.headerAction, { alignItems: "flex-end" }]}
            ></View>
          </View>
          <View style={styles.form}>
            <Text style={styles.inputLabel}>Choose day:</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Text style={styles.inputControl}>{date.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
              />
            )}
            <Text style={styles.inputLabel}>Choose hour:</Text>
            <View style={styles.hours}>
              {availableSlots.length === 0 ? (
                <Text>No Appointment available</Text>
              ) : (
                availableSlots.map((slot, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSlectedSlot(slot);
                      }}
                    >
                      <View
                        style={[
                          styles.hourInput,
                          {
                            backgroundColor:
                              slectedSlot == slot ? "#dd3545" : "#f1f5f9",
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.hourLabel,
                            { color: slectedSlot == slot ? "#fff" : "#555" },
                          ]}
                        >
                          {slot.hourStart} - {slot.hourend}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              )}
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() =>
                  Alert.alert(
                    "Confirmation",
                    `Are you sure to book the appointment ?`,
                    [
                      { text: "Cancel", style: "cancel" },
                      {
                        text: "Ok",
                        onPress: () => handleSubmit(),
                      },
                    ]
                  )
                }
              >
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btn,
                  { backgroundColor: "#ff4032", borderColor: "#ff4032" },
                ]}
                onPress={handleReset}
              >
                <Text style={styles.btnText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        <FlashMessage position="top"></FlashMessage>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 50,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
  },
  /** Form */
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
  /** Input */
  input: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 20,
    marginTop: -20,
    fontWeight: "500",
    color: "#121a26",
    marginBottom: 8,
  },
  inputControl: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "black",
    marginBottom: 40,
    marginTop: 10,
  },
  /** Button */
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#ff4032",
    borderColor: "#ff4032",
    marginRight: 6,
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 8,
  },
  headerAction: {
    width: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: -20,
  },

  hours: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  hourInput: {
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 5,
  },
});

export default Appointment;
