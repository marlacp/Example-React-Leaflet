/* eslint-disable no-loop-func */
import React, { useState, useEffect } from 'react';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
// import {Icon} from 'leaflet'
import './../assets/styles/ChartMap.styles.css';

const ChartMap = () => {
    const [api, setApi] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/sensors')
          .then((response) => response.json())
          .then((data) => setApi(data));
      }, []);
  

    const [activePark, setActivePark] = React.useState(null);

  return (
      <Map center={[5.725, -72.940]} zoom={18}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
     />

    { api.length >0 && (
            <div>
            {api.map((park,index) => (
            <Marker
            key={index}
            position={[
                park['Lat'], 
                park['Long'],
            ]}

            onClick={() => {
                setActivePark(park);
            }}
            />
        ))}

        
        {activePark && (

        <Popup
        position={[
            activePark['Lat'],
            activePark['Long']
            ]}
            onClose={() => {
            setActivePark(null);
            }}
        >

            <div>
            <h2>CT: {activePark['CT']}</h2>
            <h2>ST: {activePark['ST']}</h2>
            <h2>V: {activePark['Volt']}</h2>
            <h2>Cod: {activePark['Cod']}</h2>
            </div>
        </Popup>
        )}
            </div>
        )}

      
    </Map>

  );
};
export default ChartMap;

