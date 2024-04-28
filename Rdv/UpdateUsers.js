import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { API_URL } from "../config/ConfigApi";

export default function UpdateUsers({route, navigation }) {
  

  const [lastName, setLastName] = useState(route.params.nom);
  const [firstName, setFirstName] = useState(route.params.prenom);
  const [email, setEmail] = useState(route.params.email);
  const [phone, setPhone] = useState(route.params.phone);

  const handlerUpdate = async (id) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const config = {
        headers: { Authorization:` Bearer ${token}` },
      };
      
      const response = await axios.patch(`${API_URL}/users/${id}`,{
        nom : lastName,
        prenom : firstName, 
        email:email,
        phone:phone
      }, config);
       showMessage({
         message: "Your  profile has been updated successfully",
         type: "success",
         
       });
      
      //  await AsyncStorage.setItem("token",response.data);
       setTimeout(() => {
        navigation.navigate("Users")
       }, 1000);

    } catch (error) {
      console.error("Erreur lors de suppression des données:", error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar></StatusBar>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>update account</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Firstname</Text>

              <TextInput
                // clearButtonMode="while-editing"
                onChangeText={(name) => setFirstName(name)}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={firstName}
              />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Lastname</Text>

              <TextInput
                // clearButtonMode="while-editing"
                onChangeText={(name) => setLastName(name)}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={lastName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email </Text>
              <TextInput
                
                onChangeText={(email) => setEmail(email)}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={email}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Phone Number</Text>

              <TextInput
                // autoCapitalize="none"
                // autoCorrect={false}
                // clearButtonMode="while-editing"
                // keyboardType="phone-number"
                onChangeText={(phonenumber) => setPhone(phonenumber)}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={phone}
              />
            </View>

            

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={
                  ()=>handlerUpdate(route.params.id)}
                // onPress={() => {
                //   console.log("pressed");
                //   handleSave();
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>save</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Go Back</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <FlashMessage position="top"></FlashMessage>
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
  header: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#929292",
  },
  /** Form */
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 20,
    marginBottom: 1,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#e8ecf4",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#ff4032",
    borderColor: "#ff4032",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
});
