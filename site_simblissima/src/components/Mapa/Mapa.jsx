import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ selectedPlace }) => {
    //Centro do Mapa
    const center = [-23.64952802525482, -46.699298278229286]
    
    // Locais principais
    const autodromo = [-23.701, -46.697]; // Coordenadas do circuito de Interlagos
    const avenida_paulista = [-23.561, -46.656]; // Coordenadas da Avenida Paulista
    const masp = [-23.561, -46.655]; // Coordenadas do MASP
    const zoo = [-23.650, -46.620]; // Coordenadas do Zoologico
    const usp = [-23.557, -46.721]; // Coordenadas da USP
    const mor = [-23.597, -46.720]; // Coordenadas do Morumbi
    const jard_bot = [-23.639, -46.627]; // Coordenadas do Jardim Botanico de SP
    const ibirapuera = [-23.584, -46.663]; // Coordenadas do Ibirapuera
    const aquario = [-23.593, -46.614]; // Coordenadas do Aquario de SP

    // Hoteis
    const hot_atica = [-23.638, -46.665]; // Coordenadas do Hotel GoÁtica
    const hot_blue = [-23.622, -46.696]; // Coordenadas do Hotel Blue Tree
    const hot_merc = [-23.600, -46.666]; // Coordenadas do Hotel Mercure
    const hot_ibis = [-23.621, -46.696]; // Coordenadas do Hotel Ibis
    const hot_oyo = [-23.624, -46.661]; // Coordenadas do Hotel OYO

    // Restaurantes no Brooklin
    const harvest = [-23.6119, -46.6963]; // Harvest Restaurant
    const stanleys_fish = [-23.6132, -46.6959]; // Stanley's Fish and Chips
    const brooklin_pub = [-23.6135, -46.6966]; // Brooklin Pub
    const goodberry = [-23.6109, -46.6948]; // The Goodberry
    const wokin = [-23.6113, -46.6955]; // WOKIN Express
    const bangrak = [-23.6115, -46.6960]; // Bangrak Thai Street Food
    const barbacoa = [-23.6116, -46.6952]; // Barbacoa Churrascaria
    const bar_brahma = [-23.6134, -46.6967]; // Bar Brahma

    // Restaurantes e Hospitais em São Paulo
    const hospital_AE = [-23.599, -46.715]; // Coordenadas do hospital Albert Einstein
    const centromedico_SJ = [-23.707, -46.696]; // Coordenadas do Centro Médico São José
    const hospital_SR = [-23.581, -46.640]; // Coordenadas do Hospital Santa Rita
    const hospital_SL = [-23.585, -46.675]; // Coordenadas do Sirio Libanês
    const hospital_B = [-23.598, -46.686]; // Coordenadas do Blanc Hospital

    // Delegacias
    const dp_102 = [-23.675520590215722, -46.712377865049646]; // Coordenadas do 102° Distrito Policial (Socorro)
    const dp_27 = [-23.71138321243358, -46.70804935953138]; // Coordenadas da 27ª DP (Interlagos)
    const dp_49 = [-23.589718103021053, -46.66747317791252]; // Coordenadas da 49ª DP (Pinheiros)

    return (
        <div className="map">
            <MapContainer center={center} zoom={12.4} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Locais principais */}
                <Marker position={autodromo}>
                    <Popup>Autódromo</Popup>
                </Marker>

                {/* Restaurantes e Hospitais em São Paulo */}
                {selectedPlace === 'hospital' && (
                    <>
                        <Marker position={hospital_AE}>
                            <Popup>Hospital Albert Einstein</Popup>
                        </Marker>
                        <Marker position={centromedico_SJ}>
                            <Popup>Centro Médico São José</Popup>
                        </Marker>
                        <Marker position={hospital_SR}>
                            <Popup>Hospital Santa Rita</Popup>
                        </Marker>
                        <Marker position={hospital_SL}>
                            <Popup>Hospital Sírio Libanês</Popup>
                        </Marker>
                        <Marker position={hospital_B}>
                            <Popup>Blanc Hospital</Popup>
                        </Marker>
                    </>
                )}
                {selectedPlace === 'restaurant' && (
                    <>
                        <Marker position={harvest}>
                            <Popup>Harvest Restaurant</Popup>
                        </Marker>
                        <Marker position={stanleys_fish}>
                            <Popup>Stanley's Fish and Chips</Popup>
                        </Marker>
                        <Marker position={brooklin_pub}>
                            <Popup>Brooklin Pub</Popup>
                        </Marker>
                        <Marker position={goodberry}>
                            <Popup>The Goodberry</Popup>
                        </Marker>
                        <Marker position={wokin}>
                            <Popup>WOKIN Express</Popup>
                        </Marker>
                        <Marker position={bangrak}>
                            <Popup>Bangrak Thai Street Food</Popup>
                        </Marker>
                        <Marker position={barbacoa}>
                            <Popup>Barbacoa Churrascaria</Popup>
                        </Marker>
                        <Marker position={bar_brahma}>
                            <Popup>Bar Brahma</Popup>
                        </Marker>
                    </>
                )}
                {selectedPlace === 'hotel' && (
                    <>
                        <Marker position={hot_atica}>
                            <Popup>Hotel GoÁtica</Popup>
                        </Marker>
                        <Marker position={hot_blue}>
                            <Popup>Hotel Blue Tree</Popup>
                        </Marker>
                        <Marker position={hot_merc}>
                            <Popup>Hotel Mercure</Popup>
                        </Marker>
                        <Marker position={hot_ibis}>
                            <Popup>Hotel Ibis</Popup>
                        </Marker>
                        <Marker position={hot_oyo}>
                            <Popup>Hotel OYO</Popup>
                        </Marker>
                    </>
                )}
                {selectedPlace === 'atrativos' && (
                    <>
                        <Marker position={jard_bot}>
                            <Popup>Jardim Botânico de SP</Popup>
                        </Marker>
                        <Marker position={ibirapuera}>
                            <Popup>Parque Ibirapuera</Popup>
                        </Marker>
                        <Marker position={aquario}>
                            <Popup>Aquário de SP</Popup>
                        </Marker>
                        <Marker position={avenida_paulista}>
                            <Popup>Avenida Paulista</Popup>
                        </Marker>
                        <Marker position={masp}>
                            <Popup>MASP</Popup>
                        </Marker>
                        <Marker position={zoo}>
                            <Popup>Zoológico de SP</Popup>
                        </Marker>
                        <Marker position={usp}>
                            <Popup>USP</Popup>
                        </Marker>
                        <Marker position={mor}>
                            <Popup>Morumbi</Popup>
                        </Marker>
                    </>
                )}
                {selectedPlace === 'police' && (
                    <>
                        <Marker position={dp_102}>
                            <Popup>102° Distrito Policial (Socorro)</Popup>
                        </Marker>
                        <Marker position={dp_27}>
                            <Popup>27ª DP (Interlagos)</Popup>
                        </Marker>
                        <Marker position={dp_49}>
                            <Popup>49ª DP (Pinheiros)</Popup>
                        </Marker>
                    </>
                )}
            </MapContainer>
        </div>
    );
};

export default Mapa;
