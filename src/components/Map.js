import { useState, useMemo, useEffect } from "react";
import {
    GoogleMap,
    useLoadScript,
    MarkerF,
    InfoWindowF,
} from "@react-google-maps/api";
const containerStyle = {
    width: "540px",
    height: "420px",
};
export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA7N5D38KaAHlcrb0guUSqvTAwKugBQ1Cc",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const [markers, setMarkers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/places")
            .then((res) => res.json())
            .then((data) => {
                setMarkers(data);
            });
    }, []);
    // console.log(markers);
    //
    // const jsonObj = require("./test.json");
    // console.log(jsonObj["places"]);
    // const [markers, setMarkers] = useState(jsonObj["places"]);
    // console.log(state);
    const center = useMemo(() => ({ lat: 24.148, lng: 120.665 }), []);

    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    return (
        <GoogleMap
            zoom={13}
            center={center}
            mapContainerStyle={containerStyle}
            onClick={() => setActiveMarker(null)}
        >
            {markers.map((pl) => {
                return (
                    <MarkerF
                        key={pl.id}
                        position={{ lat: pl.lat, lng: pl.lng }}
                        onClick={() => handleActiveMarker(pl.id)}
                    >
                        {activeMarker === pl.id ? (
                            <InfoWindowF
                                onCloseClick={() => setActiveMarker(null)}
                            >
                                <div>
                                    <h6>{pl.title}</h6>
                                    <p>{pl.address}</p>
                                </div>
                            </InfoWindowF>
                        ) : null}
                    </MarkerF>
                );
            })}
        </GoogleMap>
    );
}
