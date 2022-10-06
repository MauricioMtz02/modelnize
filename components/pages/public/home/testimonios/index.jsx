import Testimonio from "./Testimonio"

const testimonios = [
    {
        firstname: 'Alfredo',
        lastname: 'Sorcia Contreras',
        content: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
    },
    {
        firstname: 'Edmundo',
        lastname: 'Rodriguez Vlas',
        content: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
    }
]

const Testimonios = () => {
    return (
        <section>
            <div className="text-dark text-center">
                <h3>Testimonios</h3>
                <p className="mb-0">Texto de relleno para testimonios</p>
            </div>

            <div className="mt-4 row gy-4 gx-xl-5 justify-content-center">
                {testimonios.map(testimonio => <Testimonio key={testimonio.firstname} testimonio={testimonio} />)}
            </div>
        </section>
    )
}

export default Testimonios