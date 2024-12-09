import React, { useState } from 'react';
import MapWithDirections from '../Components/MapWithDirections';

const MapPage = () => {
    const [originCity, setOriginCity] = useState('Maastricht');
    const [destinationCity, setDestinationCity] = useState('Utrecht');

    const handleOriginChange = (e) => {
        setOriginCity(e.target.value);
    };

    const handleDestinationChange = (e) => {
        setDestinationCity(e.target.value);
    };

    return (
        <div>
            <h1>Map</h1>
            <div>
                <label>
                    Origin City:
                    <input type="text" value={originCity} onChange={handleOriginChange} />
                </label>
            </div>
            <div>
                <label>
                    Destination City:
                    <input type="text" value={destinationCity} onChange={handleDestinationChange} />
                </label>
            </div>
            <MapWithDirections originCity={originCity} destinationCity={destinationCity} />
        </div>
    );
};

export default MapPage;