const LocationInfo = ({ info }) => {
    return(
        <div className="LocationInfo-container">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>Title: <strong>{info.title}</strong></li>
            </ul>
        </div>
    );
}

export default LocationInfo;