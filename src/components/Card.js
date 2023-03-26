import location from "../images/location-icon.png"

export default function Card(props) {
    return (
        <div className="card">
            <img className="poster" src={props.imgURL} alt="Poster"/>
            <div>
                <div className="card-title">
                    <img className="location-icon" src={location} alt="Location Icon"/>
                    <p>{props.country}</p>
                    <a target="_blank" href={props.locationURL}>View on Google Maps</a>
                </div>
                <h1>{props.location}</h1>
                <p><b>{props.date}</b></p>
                <p>{props.description}</p>
            </div>
        </div>
    );
}