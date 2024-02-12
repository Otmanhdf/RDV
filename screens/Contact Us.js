import React from 'react';
import { View, Text, StyleSheet,Linking } from 'react-native';

const Notification = () => {
  const handleLinkPress = () => {
    const url = 'http://www.fs.ucd.ac.ma'; // Mettez ici l'URL complet
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adresse :</Text>
      <Text style={styles.text}>Route Ben Maachou, B.P. :20, 24.000 El Jadida, Maroc.</Text>
      
      <Text style={styles.title}>Tél. :</Text>
      <Text style={styles.text}>05.23.34.23.25 / 05.23.34.30.03.</Text>
      
      <Text style={styles.title}>Fax :</Text>
      <Text style={styles.text}>05.23.34.21.87.</Text>
      
      <Text style={styles.title}>Web :</Text>
      <Text style={styles.link} onPress={handleLinkPress}>www.fs.ucd.ac.ma</Text>
      
      
      <Text style={styles.title}>Doyens de la faculté des sciences :</Text>
      <Text style={styles.text}>Hafid Saber (doyen en exercice)</Text>
      <Text style={styles.text}>Mohammed Blaghen</Text>
      <Text style={styles.text}>Abdelmajid Belafhal</Text>
      <Text style={styles.text}>Yahia Boughaleb</Text>
      <Text style={styles.text}>Bouchaib Mernari</Text>
      <Text style={styles.text}>Feu Abdessalam Sadel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginBottom: 8,
  },
});

export default Notification;
