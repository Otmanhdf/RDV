import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import  auth   from './../config/Firebase'

export default function SignUp({navigation}) {
 
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  // const [name,setName]=useState('')



const handlersignup=()=>{
  if (!email || !password) {
    Alert.alert('Error', 'Please enter both email and password');
    return;
  }

  // Regular expression to check if the email has the domain "@ucd.ac.ma"
  const emailRegex = /^[^\s@]+@ucd\.ac\.ma$/i;

  if (!emailRegex.test(email)) {
    Alert.alert('Error', 'Please enter a valid email with the domain "@ucd.ac.ma"');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registered successfully
      const user = userCredential.user;
      Alert.alert('Registration Success', `Welcome ${user.email}`);
      navigation.navigate('Login'); // Navigate to the login page after registration
    })
    .catch((error) => {
      const errorMessage = error.message;
      Alert.alert('Registration Failed', 'Try again!');
    });
};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create  account </Text>
        </View>
        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setEmail(email)}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={email} />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={password => setPassword(password)}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={password} />
            </View>
            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={
                  handlersignup
                }>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login')
              }}>
              <Text style={styles.formFooter}>
                Already have an account?{' '}
                <Text style={{ textDecorationLine: 'underline', color: '#00b386' }}>Log in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
      </ScrollView>
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
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#929292',
  },
  /** Form */
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#00b386',
    borderColor: '#00b386',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});