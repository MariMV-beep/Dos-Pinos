import { useState } from "react";
import Header from "./header.jsx";
import Encuestas from "./Encuestas.jsx";
import "./styles.css";

export default function App() {
    const [enviado, setEnviado] = useState(false);

    return (
        <div className="pagina">
            <Header />
            <main className="contenido">
                <section className="introduccion">
                    <p className="introduccion__etiqueta">Un antojo para compartir</p>
                    <h2>Ayúdanos a crear tu helado favorito</h2>
                    <p>
                        Cuéntanos qué sabores y toppings te gustan. Tu combinación ideal
                        puede inspirar nuestra próxima receta.
                    </p>
                </section>

                <form
                    className="formulario"
                    onChange={() => setEnviado(false)}
                    onSubmit={(event) => {
                        event.preventDefault();
                        setEnviado(true);
                    }}
                >
                    <Encuestas />
                    <button className="boton-enviar" type="submit">
                        Compartir mis gustos
                    </button>
                    {enviado && (
                        <p className="confirmacion" role="status">
                            ¡Gracias! Ya tenemos tu combinación favorita.
                        </p>
                    )}
                </form>
            </main>
            <footer className="pie">
                Hecho para disfrutar cada cucharada 
            </footer>
        </div>
    );
}
