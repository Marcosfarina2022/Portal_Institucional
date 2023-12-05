import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet"
import  icon from "leaflet/dist/images/marker-icon.png";
import  iconShadow from "leaflet/dist/images/marker-icon.png";
import 'leaflet/dist/leaflet.css';

let iconUbicacion = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [30, 25],
    iconAnchor: [17, 90],
    shadowAnchor: [22, 94],
    popupAnchor: [-3, -76]
});


const Mapa = () => {
  const position = [-54.83079, -68.41223]; // Latitud y longitud inicial

  return (
    <MapContainer center={position} zoom={14} scrollWheelZoom= { false } style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={iconUbicacion}>
        <Popup>
          Aquí nos puedes encontrar
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
