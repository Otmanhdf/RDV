
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Button } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import * as Location from 'expo-location';

const GOOGLE_MAPS_APIKEY = "AIzaSyDBMDbPv7bNePHYDoGo28yK8ddrPnJ2hEY";

export default function Mapuniver() {

  const route = useRoute();
  const [userLocation, setUserLocation] = useState(null);
  const latitude = route.params?.latitude;
  const longtitude = route.params?.longtitude;
  const title = route.params?.title;
  const description = route.params?.description;

  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longtitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Autorisation de localisation en premier plan non accordée");
          return;
        }

        // Facultativement, vérifiez les autorisations en arrière-plan
        let backgroundStatus = await Location.requestBackgroundPermissionsAsync();
        if (backgroundStatus.status !== "granted") {
          console.error("Autorisation de localisation en arrière-plan non accordée");
          // Gérez en conséquence, par exemple, incitez l'utilisateur à activer les autorisations
        }

        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        
        // Ajoutez une gestion des erreurs ici si nécessaire

        // Optionally, you can set the region to the user's location
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        });
      } catch (error) {
        console.error("Erreur lors de l'obtention de la localisation de l'utilisateur :", error);
        // Gérez en conséquence, par exemple, incitez l'utilisateur à activer les services de localisation
      }
    };

    fetchUserLocation();
  }, []);
 
  return (
    
    <View style={styles.container}>
      <MapView
        minZoomLevel={16}
        maxZoomLevel={25}
        mapType="satellite"
        // mapType="hybrid"
        style={styles.map}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true} // Optionally, set this to true if you want the map to follow the user's location
        // customMapStyle={YOUR_CUSTOM_MAP_STYLE} // Replace with your custom map style
      > 
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longtitude,
          }}
          title={title}
          description={description}
        />
        {userLocation && (
          <MapViewDirections
            origin={userLocation} // Use live user location as the origin
            destination={{
              latitude: latitude,
              longitude: longtitude,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={8}
            strokeColor="#1ad1ff"
            mode="WALKING"
          />
        )}
      </MapView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    marginHorizontal:10
  },
  map: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
});
