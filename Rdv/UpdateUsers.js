import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function UpdateUsers({ navigation }) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    // Logique pour enregistrer les données du formulaire
    Alert.alert(
      "Updating confirmed",
      "Your Update has been successfully registered!"
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Create account</Text>
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
                // autoCapitalize="none"
                // autoCorrect={false}
                // clearButtonMode="while-editing"
                // keyboardType="Phone Number"
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

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                // autoCorrect={false}
                // clearButtonMode="while-editing"
                onChangeText={(password) => setPassword(password)}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={password}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={handleSubmit}
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
