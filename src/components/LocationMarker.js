import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert"

const LocationMarker = ({data, lat, lng, onClick}) => {
    return(
        <div onClick={() => onClick(data)} className="LocationMarker-container">
            <Icon icon={locationIcon} className="locationMarker-icon"></Icon>
        </div>
    )
}

export default LocationMarker;