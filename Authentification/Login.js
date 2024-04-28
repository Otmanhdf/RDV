import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,

  Alert,
  ScrollView,
  StatusBar,
} from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { TextInput } from "react-native-paper";
import { API_URL } from "../config/ConfigApi";
import { verifyPassword } from "./SignUp";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@gmail\.com$/i;
      return emailPattern.test(email);
    };
    if (!password || !email || password.length < 8 || !validateEmail(email) || !verifyPassword(password)) {
       if (!validateEmail(email)) {
        showMessage({
          message: "Email no valid ..@gmail.com",
          type: "danger",
          style: "#ffc5c5",
        });
       } else if (!verifyPassword(password)){
        showMessage({
          message: "Password no valid must by 8 different characters",
          type: "danger",
          style: "#ffc5c5",
        });
        
       }else {
        showMessage({
          message: "Tous les champs sont obligatoires",
          type: "danger",
          style: "#ffc5c5",
        });
          
         return;
       }
    }else{

    try {
      const response = await axios.post(`${API_URL}/users/login`, {
        email: email,
        pwd: password,
      });
      if (response.status == 201) {
        const token = response.data;
        await AsyncStorage.setItem("token", token);
       
        navigation.navigate("Gestion");
      }
      
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Alert.alert("Erreur", "Email ou mot de passe incorrect");
      } else {
        console.error("Erreur lors de la connexion de l'utilisateur :", error);
      }
    }}
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar></StatusBar>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              alt=""
              resizeMode="contain"
              style={styles.headerImg}
              source={require("../assets/bd.png")}
            />

            <Text style={styles.title}>Welcome to Blood Donation</Text>

            <Text style={styles.subtitle}> Login in. </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(email) => setEmail(email)}
                label="Email"
                activeUnderlineColor="#575758"
                right={<TextInput.Icon icon="email" color="#000" size={20} />}
                keyboardType="email-address"
                style={styles.inputControl}
                value={email}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                autoCorrect={false}
                onChangeText={(password) => setPassword(password)}
                label="Password"
                activeUnderlineColor="#575758"
                style={styles.inputControl}
                secureTextEntry={showPassword}
                value={password}
                right={
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword(!showPassword)}
                    color="#000"
                    size={20} />}
                
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  handleLogin();
                }}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
              style={{ marginTop: "auto" }}
            >
              <Text style={styles.formFooter}>
                Don't have an account?
                <Text
                  style={{ textDecorationLine: "underline", color: "#ff7065" }}
                >
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
        <FlashMessage position="top"></FlashMessage>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  /** Header */
  header: {
    marginVertical: 40,
  },
  headerImg: {
    width: 500,
    height: 300,
    alignSelf: "center",
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
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
    height: 55,
    backgroundColor: "#e8ecf4",
    paddingHorizontal: 16,
   
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
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
