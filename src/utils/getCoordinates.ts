interface Coordinates {
    lat: number;
    lng: number;
}

export async function getCoordinates(address: string): Promise<Coordinates | null> {
    const apiKey = 'AIzaSyDfhETszo3IxVO5IY_-FOkrZC-hPNce-Fk'; //process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Store this in your .env file
    const encodedAddress = encodeURIComponent(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng,
            };
        } else {
            console.error('Geocoding API Error:', data.status);
            return null;
        }
    } catch (error) {
        console.error('Fetch failed:', error);
        return null;
    }
}
