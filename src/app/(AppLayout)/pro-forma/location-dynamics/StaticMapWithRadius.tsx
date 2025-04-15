// components/StaticMapWithRadius.tsx
import React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';

type StaticMapWithRadiusProps = {
    lat: number;
    lng: number;
    zoom?: number;
    width?: number;
    height?: number;
};

const StaticMapWithRadius: React.FC<StaticMapWithRadiusProps> = ({
    lat,
    lng,
    zoom = 12,
    width = 600,
    height = 600,
}) => {
    const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const getCirclePath = (radiusMiles: number) => {
        // Radius in meters (1 mile = 1609.34 m)
        const radiusMeters = radiusMiles * 1609.34;

        return `&path=color:0xFF0000FF|weight:2|fillcolor:0xFF000020|enc:${generateCircleEncodedPath(
            lat,
            lng,
            radiusMeters
        )}`;
    };

    const generateCircleEncodedPath = (lat: number, lng: number, radiusMeters: number) => {
        // Due to Static Map limitations, draw circle with ~32 points
        const numPoints = 32;
        const EARTH_RADIUS = 6378137; // in meters
        const d = radiusMeters / EARTH_RADIUS;

        const coords = [];
        for (let i = 0; i <= numPoints; i++) {
            const angle = (2 * Math.PI * i) / numPoints;
            const latOffset = d * Math.cos(angle);
            const lngOffset = d * Math.sin(angle) / Math.cos((lat * Math.PI) / 180);

            const pointLat = lat + (latOffset * 180) / Math.PI;
            const pointLng = lng + (lngOffset * 180) / Math.PI;

            coords.push(`${pointLat},${pointLng}`);
        }

        return coords.join('|');
    };

    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${width}x${height}&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}
${getCirclePath(1)}
${getCirclePath(3)}
${getCirclePath(5)}
&key=${GOOGLE_MAPS_API_KEY}`.replace(/\n/g, '');

    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'}>
            <Typography variant="body1" sx={{ fontSize: 32, fontWeight: 600, color: '#3A4F5F' }} textAlign='right'>
                1273 Lexington Road <br />Georgetown, KY, 40324
            </Typography>
            <Card sx={{ width, boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                    <img
                        src={mapUrl}
                        alt="Static Google Map with Radius"
                        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                    />
                </CardContent>
            </Card>
        </Stack>
    );
};

export default StaticMapWithRadius;
