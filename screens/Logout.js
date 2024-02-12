import React from 'react';
import { View, Text, Button } from 'react-native';
// import { getAuth, signOut } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logout({ handleLogout }) {
  return (
    <View>
      <Text>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
