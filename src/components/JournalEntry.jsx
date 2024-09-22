function JournalEntry({ imageUrl, title, location, startDate, endDate, description, googleMapsUrl }) {
    return (
        <article className="journal-entry">
            <div className="entry-card">
                <div className="entry-image-container">
                    <img src={imageUrl} alt={`${title} location`} className="entry-image" />
                </div>
                <div className="entry-content">
                    <div className="location-info">
                        <i className="fas fa-location-dot" aria-hidden="true"></i>
                        <p className="location">{location}</p>
                    </div>
                    <h2 className="entry-title">{title}</h2>
                    <p className="entry-date">
                        <time dateTime={startDate}>{startDate}</time> - <time dateTime={endDate}>{endDate}</time>
                    </p>
                    <p className="entry-description">{description}</p>
                    <a href={googleMapsUrl} className="google-maps-link" target="_blank" rel="noopener noreferrer">
                        View {title} on Google Maps
                    </a>
                </div>
            </div>
        </article>
    )
}

export default JournalEntry
