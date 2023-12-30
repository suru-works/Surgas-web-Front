import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../../../styles/specific/ContactUsComponent/Map.css';
import { Icon } from "leaflet";


const MapComponent = () => {
    const markerPosition = [40.712783, -74.005941];
    const [center, setCenter] = useState({
        lat: 40.712783,
        lng: -74.005941,
    });

    const customIcon = new Icon({
        iconUrl: require("../../../img/location-pin.png"),
        iconSize: [30,30]        
    })

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPosition} icon={customIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>    );
};

export default MapComponent;