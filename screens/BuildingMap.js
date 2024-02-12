import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';


import {btiment,administration,mosquée,anapec,ucd,departements,bibliotheques,buvettes,toilettes,parking,blocs,amphis} from './batiment.js'



const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.75, 400);

export default function BuildingMap({navigation}) {

 
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FBFCFF' }}>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Administration</Text>
          </View>
          <View style={styles.listContent}>
              <TouchableOpacity
                onPress={() => {
                
                  navigation.navigate('Mapuniver',{latitude:administration.location.latitude,longtitude:administration.location.longtitude,description:administration.description,title:administration.name})
                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={administration.icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{administration.name.toUpperCase()}</Text>
                      <Text style={styles.cardSubtitle}>{administration.description}</Text>
                    </View>
                  </View>
                  {/* <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>
                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
           
              </View>
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Cds</Text>
          </View>
        
      <View style={styles.listContent}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:ucd.location.latitude,longtitude:ucd.location.longtitude,description:ucd.description,title:ucd.name})

                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={ucd.icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{ucd.name.toUpperCase()}</Text>
                      <Text style={styles.cardSubtitle}>{ucd.description}</Text>
                    </View>
                  </View>
                  {/* <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>
                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
           
              </View>
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Anapec</Text>
          </View>
        
      <View style={styles.listContent}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:anapec.location.latitude,longtitude:anapec.location.longtitude,description:anapec.description,title:anapec.name})

                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={ucd.icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{anapec.name.toUpperCase()}</Text>
                      <Text style={styles.cardSubtitle}>{anapec.description}</Text>
                    </View>
                  </View>
                  {/* <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>
                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
           
              </View>
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Département</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {departements.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:item.location.latitude,longtitude:item.location.longtitude,description:item.description,title:item.name})

                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={item.icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{item.name.toUpperCase()}</Text>
                      <Text style={styles.cardSubtitle}>{item.description}</Text>
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{item.size} Office </Text>
                    {/* <Text style={styles.cardFooterText}>{}</Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Amphitheater</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {amphis.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:item.location.latitude,longtitude:item.location.longtitude,description:item.description,title:item.name})
                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={item.icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{item.name.toUpperCase()}</Text>
                      <Text style={styles.cardSubtitle}>{item.description}</Text>
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{item.size} place</Text>
                    <Text style={styles.cardFooterText}>{}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Blocks</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {blocs.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:item.location.latitude,longtitude:item.location.longtitude,description:item.description,title:item.name})

                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={item.icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{item.name.toUpperCase()}</Text>
                      <Text style={styles.cardSubtitle}>{item.description}</Text>
                    </View>
                  </View>
                  {/* <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>
                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Cafeteria</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {buvettes.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:item.location.latitude,longtitude:item.location.longtitude,description:item.description,title:item.name})

                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={item.icon}
                        size={24} />
                    </View>

                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{item.name.toUpperCase()}</Text>

                      <Text style={styles.cardSubtitle}>{item.description}</Text>
                    </View>
                  </View>

                  {/* <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>

                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Library</Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {bibliotheques.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:item.location.latitude,longtitude:item.location.longtitude,description:item.description,title:item.name})

                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={item.icon}
                        size={24} />
                    </View>

                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{item.name.toUpperCase()}</Text>

                      <Text style={styles.cardSubtitle}>{item.description}</Text>
                    </View>
                  </View>

                  <View style={styles.cardFooter}>
                    {/* <Text style={styles.cardFooterText}>{item.size}</Text> */}

                    {/* <Text style={styles.cardFooterText}>{years}</Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Parking</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {parking.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:item.location.latitude,longtitude:item.location.longtitude,description:item.description,title:item.name})

                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={item.icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{item.name}</Text>
                      <Text style={styles.cardSubtitle}>{item.description}</Text>
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    {/* <Text style={styles.cardFooterText}>{item.img} </Text> */}
                    {/* <Text style={styles.cardFooterText}>{}</Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Bathroom</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {toilettes.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('Mapuniver',{latitude:item.location.latitude,longtitude:item.location.longtitude,description:item.description,title:item.name})

                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={item.icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{item.name.toUpperCase()}</Text>
                      <Text style={styles.cardSubtitle}>{item.description}</Text>
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    {/* <Text style={styles.cardFooterText}>{item.size} </Text> */}
                    {/* <Text style={styles.cardFooterText}>{}</Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
  title: {
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** List */
  list: {
    marginBottom: 24,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: '#121a26',
  },
  listAction: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#778599',
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  /** Card */
  card: {
    width: CARD_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#b5cfc9',
    marginHorizontal: 6,
    shadowColor: '#90a0ca',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff1f5',
  },
  cardBody: {
    paddingLeft: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    color: '#121a26',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#778599',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  cardFooterText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    color: '#778599',
  },
});