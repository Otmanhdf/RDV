import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Settings from './Settings';
import { signOut } from 'firebase/auth';
import auth from './../config/Firebase.js'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Logout({navigation}) {
  const handelLogOut=()=>{
    signOut(auth).then(() => {
     navigation.navigate('Login')
    }).catch((error) => {
      Alert.alert("Log Out","error for Log Out")
    });
    
   }
  return (
    <View>
      <Settings></Settings>
      
      <View style={styles.formAction}>
                <TouchableOpacity

                  onPress={handelLogOut}
                
                >
                  <View style={styles.btn}>
                  <FeatherIcon name="log-out" color="white" size={16} />
                    <Text style={styles.btnText}>Log Out</Text>
                  </View>
                </TouchableOpacity>
              </View>
    </View>
  );
}

const styles=StyleSheet.create({
  formAction: {
    marginVertical: 12,
    marginHorizontal:20
  },
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
    marginLeft:10
  },
})