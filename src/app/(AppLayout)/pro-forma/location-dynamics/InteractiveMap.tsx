'use client';

import React, { useCallback, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const radiusInMeters = 1609.34; // 1 mile

const RADIUS = {
    oneMile: 1609.34,
    threeMiles: 1609.34 * 3,
    fiveMiles: 1609.34 * 5,
};

export default function InteractiveMap({ lat, lng }: { lat: number; lng: number }) {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>({ lat, lng });

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    });

    const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            setSelectedLocation({ lat, lng });
        }
    }, []);

    if (loadError) return <Typography color="error">Map failed to load.</Typography>;
    if (!isLoaded) return <CircularProgress />;

    return (
        <Box sx={{ mt: 2 }}>
            <GoogleMap mapContainerStyle={containerStyle} center={{ lat, lng }} zoom={14} onClick={onMapClick}>
                {selectedLocation && (
                    <>
                        <Marker position={selectedLocation} />
                        <Circle
                            center={selectedLocation}
                            radius={RADIUS.oneMile}
                            options={{
                                strokeColor: '#4285F4',
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: '#4285F4',
                                fillOpacity: 0.15,
                            }}
                        />
                        <Circle
                            center={selectedLocation}
                            radius={RADIUS.threeMiles}
                            options={{
                                strokeColor: '#34A853',
                                strokeOpacity: 0.6,
                                strokeWeight: 2,
                                fillColor: '#34A853',
                                fillOpacity: 0.1,
                            }}
                        />
                        <Circle
                            center={selectedLocation}
                            radius={RADIUS.fiveMiles}
                            options={{
                                strokeColor: '#FBBC05',
                                strokeOpacity: 0.5,
                                strokeWeight: 2,
                                fillColor: '#FBBC05',
                                fillOpacity: 0.07,
                            }}
                        />
                    </>
                )}
            </GoogleMap>
        </Box>
    );
}
