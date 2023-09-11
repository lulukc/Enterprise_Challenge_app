import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {View, Dimensions} from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

import carrosJson from "../../mock/carros.json";

export default function Mapa (){
  const [currentRegion, setCurrentRegion] = useState(null);
  const [carros, setCarros] = useState([]);


  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestForegroundPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });
        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        });
      }
    }
    loadInitialPosition();
    loadcarros();
  }, []);

  async function loadcarros() {
    setCarros(carrosJson.data);
  }

  function handleRegionChange(region) {
    setCurrentRegion(region);
  }

  return(
  <View>
    <MapView
      initialRegion={currentRegion}
      onRegionChangeComplete={handleRegionChange}
      style={{
        width: '100%',
        height: '75%',
      }}
      >
        {carros.map(ponto =>(
          <Marker
          key={ponto.id}
          coordinate={{
            latitude: ponto.localizacao.Latitudine,
            longitude: ponto.localizacao.Longitudine
          }}
          pinColor = {"#7d40e7"}
          title={ponto.nome}>
          </Marker> 
        ))
        }
    </MapView>
  </View>
  )
}