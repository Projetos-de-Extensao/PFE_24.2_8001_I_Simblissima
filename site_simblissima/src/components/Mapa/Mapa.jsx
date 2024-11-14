import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ selectedPlace }) => {
    // Locais principais
    const autodromo = [-23.701, -46.697]; // Autódromo de Interlagos

    // Hospitais
    const hospital_AE = [-23.599, -46.715]; // Hospital Albert Einstein
    const centromedico_SJ = [-23.707, -46.696]; // Centro Médico São José
    const hospital_SR = [-23.581, -46.640]; // Hospital Santa Rita
    const hospital_SL = [-23.585, -46.675]; // Sirio Libanês
    const hospital_B = [-23.598, -46.686]; // Blanc Hospital

    // Hotéis
    const hot_atica = [-23.638, -46.665]; // Hotel GoÁtica
    const hot_blue = [-23.622, -46.696]; // Hotel Blue Tree
    const hot_merc = [-23.600, -46.666]; // Hotel Mercure
    const hot_ibis = [-23.621, -46.696]; // Hotel Ibis
    const hot_oyo = [-23.624, -46.661]; // Hotel OYO

    // Restaurantes
    const restaurant = [-23.700, -46.698]; // Restaurante próximo
    const byKoji = [-23.6016, -46.7188]; // By Koji
    const amani = [-23.5845, -46.6753]; // Amani Restaurante
    const racaMorumbi = [-23.6010, -46.7219]; // Raça Morumbi
    const copa = [-23.5724, -46.6743]; // Copa Restaurante e Pizzaria
    const nobuken = [-23.5647, -46.6663]; // Nobuken Sushi Bar
    const pubPoker = [-23.5505, -46.6333]; // Pub e Poker
    const laBraciera = [-23.5609, -46.6589]; // La Braciera Pizza Napoletana

    // Delegacias e bancos
    const police = [-23.699, -46.695]; // Delegacia próxima
    const bank = [-23.703, -46.696]; // Banco próximo

    // Escolas
    const school = [-23.702, -46.690]; // Escola próxima

    // Atrações turísticas
    const jard_bot = [-23.639, -46.627]; // Jardim Botânico de SP
    const ibirapuera = [-23.584, -46.663]; // Ibirapuera
    const aquario = [-23.593, -46.614]; // Aquário de SP

    return (
        <MapContainer center={autodromo} zoom={15} style={{ height: "80vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={autodromo}>
                <Popup>Autódromo</Popup>
            </Marker>

            {selectedPlace === 'hospital' && (
                <Marker position={hospital_AE}>
                    <Popup>Hospital Albert Einstein</Popup>
                </Marker>
            )}

            {selectedPlace === 'police' && (
                <>
                    <Marker position={police}>
                        <Popup>Delegacia Próxima</Popup>
                    </Marker>
                    <Marker position={bank}>
                        <Popup>Banco Próximo</Popup>
                    </Marker>
                </>
            )}

            {selectedPlace === 'school' && (
                <Marker position={school}>
                    <Popup>Escola Próxima</Popup>
                </Marker>
            )}

            {selectedPlace === 'restaurantes' && (
                <>
                    <Marker position={byKoji}>
                        <Popup>By Koji</Popup>
                    </Marker>
                    <Marker position={amani}>
                        <Popup>Amani Restaurante</Popup>
                    </Marker>
                    <Marker position={racaMorumbi}>
                        <Popup>Raça Morumbi</Popup>
                    </Marker>
                    <Marker position={copa}>
                        <Popup>Copa Restaurante e Pizzaria</Popup>
                    </Marker>
                    <Marker position={nobuken}>
                        <Popup>Nobuken Sushi Bar</Popup>
                    </Marker>
                    <Marker position={pubPoker}>
                        <Popup>Pub e Poker</Popup>
                    </Marker>
                    <Marker position={laBraciera}>
                        <Popup>La Braciera Pizza Napoletana</Popup>
                    </Marker>
                </>
            )}

            {selectedPlace === 'hotel' && (
                <Marker position={hot_ibis}>
                    <Popup>Hotel Ibis</Popup>
                </Marker>
            )}

            {selectedPlace === 'atrativos' && (
                <>
                    <Marker position={jard_bot}>
                        <Popup>Jardim Botânico de SP</Popup>
                    </Marker>
                    <Marker position={ibirapuera}>
                        <Popup>Ibirapuera</Popup>
                    </Marker>
                    <Marker position={aquario}>
                        <Popup>Aquário de SP</Popup>
                    </Marker>
                </>
            )}
        </MapContainer>
    );
};

export default Mapa;
