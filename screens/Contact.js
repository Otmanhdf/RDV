
import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Linking
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Contact() {

  const handleLinkPress = () => {
        const url = 'http://www.fs.ucd.ac.ma'; // Mettez ici l'URL complet
        Linking.openURL(url);
      };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            

            <View
              style={[styles.headerAction, { alignItems: 'flex-end' }]} />
          </View>

          <ScrollView
            contentContainerStyle={styles.receipt}
            showsVerticalScrollIndicator={false}>
            <View style={styles.receiptLogo}>
              
              <Entypo name="address" size={32} color="#fff" />
            </View>

            <Text style={styles.receiptTitle}>
            Address
            </Text>
            <Text style={styles.receiptDescription}>
            Road Ben Maachou, B.P. :20, 24.000 El Jadida, Morocco
            </Text>

            
            <View style={styles.divider}>
              <View style={styles.dividerInset} />
            </View>

            <View style={styles.details}>
            
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Fax :</Text>

                <Text style={styles.detailsValue}>05.23.34.23.25 </Text>
              </View>

              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Tél:</Text>

                <Text style={styles.detailsValue}>05.23.34.21.87.</Text>
              </View>
              
              <View style={styles.detailsRow}>
                <Text style={styles.detailsField}>Web :</Text>

                <Text style={styles.link} onPress={handleLinkPress}>www.fs.ucd.ac.ma</Text>
              </View>

              
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
 
  /** Header */
 
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
 
  /** Receipt */
  receipt: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 140,
  },
  receiptLogo: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginBottom: 12,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 2,
  },
 
  receiptDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#35534e',
    textAlign: 'center',
    marginBottom: 12,
  },
 
 
  /** Divider */
  divider: {
    overflow: 'hidden',
    width: '100%',
    marginVertical: 24,
  },
  dividerInset: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#75cfbf',
    borderStyle: 'dashed',
    marginTop: -2,
  },
  /** Details */
  details: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
 
  detailsRow: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  detailsValue: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    color: '#444',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'right',
  },
 
  link: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 14,
        marginBottom: 8,
      },
});