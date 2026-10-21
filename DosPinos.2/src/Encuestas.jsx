import chocolate from "./assets/Hchocolate.webp";
import caramelo from "./assets/Tcaramelo.jpg";
import fresa from "./assets/Hfresa.jpg";
import vainilla from "./assets/Hvainilla.jpg";
import chispas from "./assets/Tchispas.jpg";
import nueces from "./assets/Tnueces.webp";
import cono from "./assets/Econo.jpg";
import sundae from "./assets/Esundae.webp";
import vaso from "./assets/Evasotrans.jpg";

const encuestas = [
    {
        id: "sabor",
        pregunta: "¿Cuál es tu sabor favorito?",
        opciones: [
            { id: "fresa", texto: "Fresa con crema", imagen: fresa },
            { id: "chocolate", texto: "Chocolate oscuro", imagen: chocolate },
            { id: "vainilla", texto: "Vainilla intensa", imagen: vainilla },
        ],
    },
    {
        id: "topping",
        pregunta: "¿Qué topping no puede faltar?",
        opciones: [
            { id: "chispas", texto: "Chispas de colores", imagen: chispas },
            { id: "nueces", texto: "Nueces picadas", imagen: nueces },
            { id: "caramelo", texto: "Sirope de caramelo", imagen: caramelo },
        ],
    },
    {
        id: "formato",
        pregunta: "¿Cómo lo prefieres?",
        opciones: [
            { id: "cono", texto: "En cono", imagen: cono },
            { id: "vaso", texto: "En vaso", imagen: vaso },
            { id: "sundae", texto: "Tipo sundae", imagen: sundae },
        ],
    },
];

function Opcion({ grupo, opcion }) {
    return (
        <label className="opcion">
            <input type="radio" name={grupo} value={opcion.id} required />
            <span className="opcion__texto">{opcion.texto}</span>
            {opcion.imagen ? (
                <img className="opcion__img" src={opcion.imagen} alt={opcion.texto} />
            ) : (
                <span className="opcion__img opcion__img--vacia" aria-hidden="true">
                    🍦
                </span>
            )}
        </label>
    );
}

export default function Encuestas() {
    return (
        <section className="encuestas">
            {encuestas.map((e) => (
                <fieldset className="encuesta" key={e.id}>
                    <legend className="encuesta__pregunta">{e.pregunta}</legend>
                    {e.opciones.map((o) => (
                        <Opcion key={o.id} grupo={e.id} opcion={o} />
                    ))}
                </fieldset>
            ))}
        </section>
    );
}
