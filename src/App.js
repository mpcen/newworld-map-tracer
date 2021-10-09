import { useEffect, useState } from 'react';

import './App.css';

function App() {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [listening, setListening] = useState(false);

    useEffect(() => {
        if (!listening) {
            const events = new EventSource('http://localhost:5000/events');

            events.onmessage = (event) => {
                const parsedData = JSON.parse(event.data);

                console.log(parsedData);
                setLat(parsedData.lat);
                setLng(parsedData.lng);
            };

            setListening(true);
        }
    }, [listening, lat, lng]);

    return (
        <iframe
            title='map'
            src={`https://www.newworld-map.com/#/?lat=${lat}&lng=${lng}`}
            frameborder='0'
            marginheight='0'
            marginwidth='0'
            width='100%'
            height='100%'
            scrolling='auto'
        ></iframe>
    );
}

export default App;
