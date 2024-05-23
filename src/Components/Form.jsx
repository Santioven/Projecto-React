import { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";
import "../styles/form.css"

const Form = () => {
    const [user, setUser] = useState({
    artista: "",
    cancion: "",
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [tempUser, setTempUser] = useState({ ...user });

    const handleSubmit = (event) => {
        event.preventDefault();
        const isArtistaValid = tempUser.artista.length >= 3 && !tempUser.artista.startsWith(" ");
        const isCancionValid = tempUser.cancion.length >= 6;

        if (isArtistaValid && isCancionValid) {
            setShow(true);
            setError(false);
            setUser(tempUser);
        } else {
            setShow(false);
            setError(true);
    }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <label>Nombre del Artista:</label>
            <input
                type="text"
                value={tempUser.artista}
                onChange={(event) =>
                    setTempUser({ ...tempUser, artista: event.target.value })
                }
            />
            <label>Canción:</label>
            <input
                type="text"
                value={tempUser.cancion}
                onChange={(event) =>
                    setTempUser({ ...tempUser, cancion: event.target.value })
                }
            />
            <button type="submit">Enviar</button>
            </form>
            {show && <Card user={user} />}
            {error && <ErrorMessage/>}
        </div>
        );
};

export default Form;
