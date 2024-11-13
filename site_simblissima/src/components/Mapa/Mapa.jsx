import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ selectedPlace }) => {
    const autodromo = [-23.701, -46.697]; // Coordenadas do circuito de Interlagos
    const hospital_AE = [-23.599, -46.715]; // Coordenadas do hospital Albert Einstein
    const centromedico_SJ = [-23.707, -46.696]; // Coordenadas do Centro Médico São José
    const hospital_SR = [-23.581, -46.640]; // Coordenadas do Hospital Santa Rita
    const hospital_SL = [-23.585, -46.675]; // Coordenadas do Sirio Libanês
    const hospital_B = [-23.598, -46.686] // Coordenadas do Blanc Hospital
    const avenida_paulista = [-23.561, -46.656]; // Coordenadas da Avenida Paulista
    const masp = [-23.561, -46.655]; // Coordenadas do MASP
    const zoo = [-23.650, -46.620]; // Coordenadas do Zoologico
    const usp = [-23.557, -46.721]; // Coordenadas da USP
    const mor = [-23.597, -46.720]; // Coordenadas do Morumbi
    const jard_bot = [-23.639, -46.627]; // Coordenadas do Jardim Botanico de SP
    const ibirapuera = [-23.584, -46.663]; // Coordenadas do Ibirapuera
    const aquario = [-23.593, -46.614]; // Coordenadas do Aquario de SP
    const hot_atica = [-23.638, -46.665]; // Coordenadas do Hotel GoÁtica
    const hot_blue = [-23.622, -46.696] // Coordenadas do Hotel Blue Tree
    const hot_merc = [-23.600, -46.666] // Coordenadas do Hotel Mercure
    const hot_ibis = [-23.621, -46.696]; // Coordenadas do Hotel Ibis
    const hot_oyo  = [-23.624, -46.661] // Coordenadas do Hotel OYO
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
                <>
                <Marker position={hospital}>
                    <Popup>
                        Hospital Próximo
                    </Popup>
                </Marker>
                </>
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
                <>
                <Marker position={school}>
                    <Popup>
                        Escola Próxima
                    </Popup>
                </Marker>
                </>
            )}
            {selectedPlace === 'restaurant' && (
                <>
                <Marker position={restaurant}>
                    <Popup>
                        Restaurante Próximo
                    </Popup>
                </Marker>
                </>
            )}
        </MapContainer>
    );
};

export default Mapa;