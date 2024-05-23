import "../styles/card.css"

const Card = ({ user }) => {
    const { artista, cancion } = user;
    return (
        <div className="card-container">
            <h4>Canción elegida por el usuario</h4>
            <p>Nombre del Artista: {artista}</p>
            <p>Canción: {cancion}</p>
        </div>
    );
    };

    export default Card;
