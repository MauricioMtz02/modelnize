import Proyectos from "./Proyectos"

const Portafolio = () => {
    return (
        <section>
            <div className="text-dark text-center">
                <h3>Nuestro Portafolio</h3>
                <p className="mb-0 small">En cada proyecto que realizamos, nos esforzamos por identificar nuevas formas de innovar.</p>
            </div>

            <div className="mt-4 mt-lg-5">
                <Proyectos/>
            </div>
        </section>
    )
}

export default Portafolio