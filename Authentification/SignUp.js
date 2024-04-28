import { createDrawerNavigator } from "@react-navigation/drawer";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";
import { API_URL } from "./../config/ConfigApi";
const CARD_WIDTH = Math.min(Dimensions.get("screen").width * 1 - 20, 400);


const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@gmail\.com$/i;
  return emailPattern.test(email);
};
export function verifyPassword(password) {
  const hasNumber = /[0-9]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNoSpecialChars = /^[a-zA-Z0-9]*$/.test(password);
  return hasNumber && hasUppercase && hasLowercase && hasNoSpecialChars;
}
function startsWith06(phoneNumber) {
  return /^(06|07)/.test(phoneNumber);
}

export default function SignUp({ navigation }) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleSave = async () => {
    if (
      !lastName ||
      !firstName ||
      !email ||
      !password ||
      phone.length != 10 ||
      password.length < 8 ||
      !validateEmail(email) ||
      !verifyPassword(password) ||
      !startsWith06(phone)
    ) {
      if (!validateEmail(email)) {
        showMessage({
          message: "Email no valid ..@gmail.com",
          type: "danger",
          style: "#ffc5c5",
        });
      } else if (!verifyPassword(password)) {
        showMessage({
          message: "Password no valid must be 8 different characters",
          type: "danger",
          style: "#ffc5c5",
        });
      } else if (!startsWith06(phone)) {
        showMessage({
          message: "Phone no valid start 06........",
          type: "danger",
          style: "#ffc5c5",
        });
      } else {
        showMessage({
          message: "All fields are mandatory",
          type: "danger",
          style: "#ffc5c5",
        });
        return;
      }
    } else {
      try {
        const response = await axios.post(`${API_URL}/users`, {
          nom:lastName,
          prenom:firstName,
          email:email,
          pwd:password,
          phone:phone,
          role: "user",
        });

        if (response.status == 201) {
          showMessage({
            message: "Your account created with success",
            type: "success",
          });
          setLastName("");
          setFirstName("");
          setEmail("");
          setPassword("");
          setPhone("");
          setIsCreatingAccount(true);
          setTimeout(() => {
            navigation.navigate("Login");
          }, 1000);
        }
      } catch (error) {
        console.error(
          "Erreur lors de l'enregistrement de l'utilisateur :",
          error
        );
      }
    }
  };

 
  return (
    <View style={{ flex: 1, backgroundColor: "#fff",justifyContent:"center"}}>
      <StatusBar></StatusBar>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Create account</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                onChangeText={(name) => setFirstName(name)}
                label="First name"
                activeUnderlineColor="#575758"
                style={styles.inputControl}
                value={firstName}
                right={<TextInput.Icon icon="account" color="#000" size={20} />}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                label="Last Name"
                activeUnderlineColor="#575758"
                onChangeText={(name) => setLastName(name)}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={lastName}
                right={<TextInput.Icon icon="account" color="#000" size={20} />}
              />
            </View>

            <View style={styles.input}>
              <TextInput
                onChangeText={(email) => setEmail(email)}
                style={styles.inputControl}
                value={email}
                label="Email"
                activeUnderlineColor="#575758"
                right={<TextInput.Icon icon="email" color="#000" size={20} />}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.input}>
              <TextInput
                onChangeText={(phonenumber) => setPhone(phonenumber)}
                label="Phone number"
                activeUnderlineColor="#575758"
                style={styles.inputControl}
                keyboardType="numeric"
                value={phone}
                right={<TextInput.Icon icon="phone" color="#000" size={20} />}
                maxLength={10}
              />
            </View>

            <View style={styles.input}>
              <TextInput
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
            {password.length >= 1 && password.length < 8 ? (
            <Text style={styles.motpasse}>enter 8 different characters</Text>
          ) : (
            ""
          )}

            <View style={styles.formAction}>
              <TouchableOpacity
               disabled={isCreatingAccount}
                onPress={() => {
                  handleSave();
                }}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
          
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={{ marginTop: "auto" }}
          >
            <Text style={styles.formFooter}>
              Already have an account?{" "}
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "#ff7065",
                }}
              >
                Log in
              </Text>
            </Text>
          </TouchableOpacity>
      <FlashMessage position="top"></FlashMessage>
        </KeyboardAwareScrollView>
      </View>
    </View>
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
  motpasse: {
    textAlign: "center",
    color: "red",
    fontSize: 14,
    marginVertical: 5,
  },
  header: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d1d1d",
    marginTop:40,
    marginBottom: 6,
    textAlign:"center"
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#929292",
  },
  /** Form */
  form: {
    paddingHorizontal: 24,
    width:"100%"
  },
  formAction: {
    marginVertical: 24,
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
 
  inputControl: {
    height: 50,
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
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
});
