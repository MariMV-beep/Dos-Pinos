
const encuestas = [
    {
        id: "sabor",
        pregunta: "¿Cuál es tu sabor favorito?",
        opciones: [
            { id: "fresa", texto: "Fresa con crema", imagen: "" },
            { id: "chocolate", texto: "Chocolate oscuro", imagen: "" },
            { id: "vainilla", texto: "Vainilla de Madagascar", imagen: "" },
        ],
    },
    {
        id: "topping",
        pregunta: "¿Qué topping no puede faltar?",
        opciones: [
            { id: "chispas", texto: "Chispas de colores", imagen: "" },
            { id: "nueces", texto: "Nueces picadas", imagen: "" },
            { id: "caramelo", texto: "Salsa de caramelo", imagen: "" },
        ],
    },
    {
        id: "formato",
        pregunta: "¿Cómo lo prefieres?",
        opciones: [
            { id: "cono", texto: "En cono", imagen: "" },
            { id: "vaso", texto: "En vaso", imagen: "" },
            { id: "sundae", texto: "Tipo sundae", imagen: "" },
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
