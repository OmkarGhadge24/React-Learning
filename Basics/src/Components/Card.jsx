const Card = ({ name, profession, image, bio }) => {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-img" />

            <h2 className="card-name">{name}</h2>
            <h4 className="card-profession">{profession}</h4>

            <p className="card-bio">{bio}</p>
        </div>
    );
};

export default Card;
