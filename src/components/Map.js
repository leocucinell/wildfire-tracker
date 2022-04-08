import GoogleMapReact from 'google-map-react';
import { useState } from 'react';

import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';

const Map = ({eventData, center, zoom}) => {

    const [info, setInfo] = useState(null);

    const handleMarkerClick = (data) => {
        setInfo(data) 
    }

    return(
        <div style={{ position: 'relative', height: '100vh', width: '100%' }} className='Map-container'>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GCP_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {
                    eventData.map((event) => {
                        if(event.categories[0].id === 8){
                            const lat = event.geometries[0].coordinates[1]
                            const lng = event.geometries[0].coordinates[0]
                            return(
                                <LocationMarker data={{id: event.id, title: event.title}} lat={lat} lng={lng} onClick={handleMarkerClick} key={event.id} />
                            )
                        }
                        return null
                    })
                }
            </GoogleMapReact>
            {info ? 
            <LocationInfo info={info} /> : null
            }
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map;