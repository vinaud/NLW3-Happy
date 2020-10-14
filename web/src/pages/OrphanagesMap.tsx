import React from 'react';

import '../styles/global.css';
import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';

import { Link }  from  'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58,68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2]
})

function OrphanagesMap() {
  return (
  <div id="page-map">
        <aside>
            <header>
               <img src={mapMarkerImg} alt="Happy"/>
               <h2>Escolha um orfanato no mapa</h2>
               <p> Muitas crianças estão   esperando a sua visita :)
               </p>
            </header>
            <footer>
                <strong>
                    Natal
                </strong>
                <span>
                    Rio Grande do Norte
                </span>
            </footer>
        </aside>

        <Map
        center={[-5.811854,-35.2098363]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
          <Marker 
          icon={mapIcon}
          position={[-5.811854,-35.2098363]}>
            <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
               Lar das crianças</Popup>
               <Link to="">
                 <FiArrowRight size={20} color="#fff"/>
               </Link>
          </Marker>
        </Map>
        <Link to="" className="create-orphanage">
           <FiPlus size={32}  color="#fff"></FiPlus>
        </Link>
  </div>

  );
}

export default OrphanagesMap;
