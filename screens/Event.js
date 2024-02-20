import React, { useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {db,doc,getDoc} from './../config/Firebase'



export default function Example() {

  const getDataEvent = async () => {
    const docRef = doc(db, "event", "Fg8TqBXJ1eCiUN0APgT5");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

  };

  useEffect(() => {
    getDataEvent()
  
  },[])
  return (
    <SafeAreaView style={{ backgroundColor: '#f3f5f9' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Events</Text>

       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Card */
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardImg: {
    width: 120,
    height: 154,
    borderRadius: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#173153',
    marginRight: 8,
  },
  cardAirport: {
    fontSize: 13,
    fontWeight: '600',
    color: '#5f697d',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -8,
    flexWrap: 'wrap',
  },
  cardRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  cardRowItemText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '500',
    color: '#5f697d',
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '500',
    color: '#5f697d',
  },
  cardPriceValue: {
    fontSize: 21,
    fontWeight: '700',
    color: '#173153',
  },
  cardPriceCurrency: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6f61c4',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    backgroundColor: '#173153',
    borderColor: '#173153',
  },
  btnText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#fff',
  },
});