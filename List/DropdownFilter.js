import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import { View, Text, StyleSheet,Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { API_URL } from "../config/ConfigApi";

const WIDTH = Dimensions.get("screen").width - 20;

export default function DropdownFilter(props) {
  const [isFocusRegion, setIsFocusRegion] = useState(false);

  const [valueVille, setValueVille] = useState([]);
  const [isFocusVille, setIsFocusVille] = useState(false);

  const handleVilles = async (id) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization: ` Bearer ${token}` },
      };
      const response = await axios.get(`${API_URL}/ville/villes/${id}`, config);
      setValueVille(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    }
  };

  const handleCentres = async (id) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(
        `${API_URL}/centre/centres/${id}`,
        config
      );
      props.setCentres(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocusRegion && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={props.regions}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={
            !isFocusRegion
              ? props.selectedvalueRegion
                ? props.selectedvalueRegion
                : "Select Region"
              : "..."
          }
          searchPlaceholder="Search..."
          value={props.selectedvalueRegion}
          onFocus={() => setIsFocusRegion(true)}
          onBlur={() => setIsFocusRegion(false)}
          onChange={(item) => {
            props.setSelectedValueRegion(item.label);
            handleVilles(item.id);
            setIsFocusRegion(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusRegion ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocusVille && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={valueVille}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusVille ? "Select city" : "..."}
          searchPlaceholder="Search..."
          value={valueVille}
          onFocus={() => setIsFocusVille(true)}
          onBlur={() => setIsFocusVille(false)}
          onChange={(item) => {
            // setValueVille(item.label)
            handleCentres(item.id);
            setIsFocusVille(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusVille ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** drop down */
  container: {
    width: WIDTH,
    padding: 5,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  /** Header */
  header: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
});
