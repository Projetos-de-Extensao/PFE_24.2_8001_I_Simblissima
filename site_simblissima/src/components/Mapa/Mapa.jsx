import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ selectedPlace }) => {
    const autodromo = [-23.701, -46.697]; // Coordenadas do circuito de Interlagos
    const hospital = [-23.704, -46.693]; // Coordenadas de um hospital próximo
    const police = [-23.699, -46.695]; // Coordenadas de uma delegacia próxima
    const school = [-23.702, -46.690]; // Coordenadas de uma escola próxima
    const restaurant = [-23.700, -46.698]; // Coordenadas de um restaurante próximo
    const bank = [-23.703, -46.696]; // Coordenadas de um banco próximo

    return (
        <MapContainer center={autodromo} zoom={15} style={{ height: "80vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={autodromo}>
                <Popup>
                    Autodromo
                </Popup>
            </Marker>
            {selectedPlace === 'hospital' && (
                <Marker position={hospital}>
                    <Popup>
                        Hospital Próximo
                    </Popup>
                </Marker>
            )}
            {selectedPlace === 'police' && (
                <>
                    <Marker position={police}>
                        <Popup>
                            Delegacia Próxima
                        </Popup>
                    </Marker>
                    <Marker position={bank}>
                        <Popup>
                            Banco Próximo
                        </Popup>
                    </Marker>
                </>
            )}
            {selectedPlace === 'school' && (
                <Marker position={school}>
                    <Popup>
                        Escola Próxima
                    </Popup>
                </Marker>
            )}
            {selectedPlace === 'restaurant' && (
                <Marker position={restaurant}>
                    <Popup>
                        Restaurante Próximo
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default Mapa;