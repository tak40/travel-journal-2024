function JournalEntry(props) {
    return (
        <section className="journal-entry">
            <div className="entry-card">
                <div className="entry-image-container">
                    <img src={props.imageUrl} alt={props.title} className="entry-image" />
                </div>
                <div className="entry-content">
                    <div className="location-info">
                        <i className="fas fa-location-dot"></i>
                        <p className="location">{props.location}</p>
                    </div>
                    <h2 className="entry-title">{props.title}</h2>
                    <p className="entry-date">
                        {props.startDate} - {props.endDate}
                    </p>
                    <p className="entry-description">{props.description}</p>
                    <a href={props.googleMapsUrl} className="google-maps-link">
                        View on Google Maps
                    </a>
                </div>
            </div>
        </section>
    )
}

export default JournalEntry
