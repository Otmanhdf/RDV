
import React, { useEffect, useState } from 'react';
import auth from '../config/Firebase';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView
} from 'react-native';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";


export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
useEffect(() => {   console.log("loginpage")}
,[]);
  const handleLogin = () => {

    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.replace("Faculte");
        // Alert.alert('Login Successed', user.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert("Login Failed", "Email Or Password Doesn't exist!!");
      });

    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>

              <Image
                alt=""
                resizeMode="contain"
                style={styles.headerImg}
                source={require('../assets/fs.png')}

              />

              <Text style={styles.title}>
                {/* Welcome to <Text style={{ color: '#4dd2ff' }}>Fsj Map</Text> */}
                Welcome to Fsj Map
              </Text>

              <Text style={styles.subtitle}> Login in. </Text>

            </View>

            <View style={styles.form}>
              <View style={styles.input}>
                {/* <Text style={styles.inputLabel}>Email address</Text> */}

                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  // keyboardType="email-address"
                  onChangeText={email => setEmail(email)}
                  placeholder="Email"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={email} />
              </View>

              <View style={styles.input}>
                {/* <Text style={styles.inputLabel}>Password</Text> */}

                <TextInput
                  autoCorrect={false}
                  onChangeText={password => setPassword(password)}
                  placeholder=" Password"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={password} />
              </View>

              <View style={styles.formAction}>
                <TouchableOpacity

                  onPress={handleLogin}
                // onPress={() => {

                //   navigation.navigate('Faculte')
                // }}
                >
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp')
                }
                }
                style={{ marginTop: 'auto' }}>
                <Text style={styles.formFooter}>
                  Don't have an account?{' '}
                  <Text style={{ textDecorationLine: 'underline', color: '#00b386' }}>Sign Up</Text>
                </Text>
              </TouchableOpacity>


            </View>

          </View>
        </ScrollView>
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
      fontSize: 27,
      fontWeight: '700',
      color: '#1d1d1d',
      marginBottom: 6,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      color: '#929292',
      textAlign: 'center',
    },
    /** Header */
    header: {
      marginVertical: 40,
    },
    headerImg: {
      width: 500,
      height: 300,
      alignSelf: 'center',
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
      fontWeight: '600',
      color: '#222',
      textAlign: 'center',
      letterSpacing: 0.15,
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
      backgroundColor: '#fff',
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
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },

  });
