import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import auth from './../config/Firebase.js'

export default function Settings() {
 const  [user, setUser] = useState(null);
  const [form, setForm] = useState({
    language: 'English',
    darkMode: false,
  });
    const handleLinkPress = () => {
      const url = 'http://www.fs.ucd.ac.ma'; // Mettez ici l'URL complet
      Linking.openURL(url);
    };

useEffect(()=>{
 const user=auth.currentUser;
 if(user){
  setUser(user)
 }else{
  console.log('cannot exist user')
 }
},[])
  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <Image
            alt=""
            source={require('../assets/per.jpeg')}
            style={styles.profileAvatar} />
          <Text style={styles.profileEmail}>{user?user.email:''}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },

  /** Profile */
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#229ab2',
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '400',
    color: '#229ab2',
  },
 
  /** Section */
  section: {
    paddingTop: 12,
  },

});