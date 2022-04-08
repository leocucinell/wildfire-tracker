import GoogleMapReact from 'google-map-react';

import LocationMarker from './LocationMarker';

const Map = ({eventData, center, zoom}) => {

    const handleMarkerClick = () => {
        console.log('FIRE!')
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
                            console.log(event)
                            const lat = event.geometries[0].coordinates[1]
                            const lng = event.geometries[0].coordinates[0]
                            return(
                                <LocationMarker lat={lat} lng={lng} onClick={handleMarkerClick} key={event.id} />
                            )
                        }
                        return null
                    })
                }
            </GoogleMapReact>
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