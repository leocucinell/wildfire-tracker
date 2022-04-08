import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert"

const LocationMarker = ({lat, lng, onClick}) => {
    return(
        <div className="LocationMarker-container" onClick={onClick}>
            <Icon icon={locationIcon} className="locationMarker-icon"></Icon>
        </div>
    )
}

export default LocationMarker;