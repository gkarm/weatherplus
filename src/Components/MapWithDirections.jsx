import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapWithDirections = ({ originCity, destinationCity }) => {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [response, setResponse] = useState(null);
    const [map, setMap] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const directionsCallback = useCallback((res) => {
        if (res !== null) {
            if (res.status === 'OK') {
                setResponse(res);
            } else {
                console.error('Response:', res);
            }
        }
    }, []);

    const onLoad = (mapInstance) => {
        setMap(mapInstance);
    };

    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: origin?.lat || 50.851368, // Default to Maastricht
        lng: origin?.lng || 5.690973, // Default to Maastricht
    };

    const geocodeCity = useCallback((city, setCityCoordinates) => {
        if (window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: city }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    const location = results[0].geometry.location;
                    setCityCoordinates({ lat: location.lat(), lng: location.lng() });
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
    }, []);

    useEffect(() => {
        if (isLoaded && originCity) {
            geocodeCity(originCity, setOrigin);
        }
    }, [originCity, geocodeCity, isLoaded]);

    useEffect(() => {
        if (isLoaded && destinationCity) {
            geocodeCity(destinationCity, setDestination);
        }
    }, [destinationCity, geocodeCity, isLoaded]);

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDDQukFhFA_ohffPNJkvLMDydA_uZ8XXDc"
            onLoad={() => setIsLoaded(true)}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
            >
                {origin && destination && (
                    <DirectionsService
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING',
                        }}
                        callback={directionsCallback}
                    />
                )}
                {response !== null && (
                    <DirectionsRenderer
                        options={{
                            directions: response,
                        }}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapWithDirections;