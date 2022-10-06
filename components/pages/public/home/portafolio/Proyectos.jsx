import Proyecto from "../../Proyecto"

const proyectos = [
    {
        logo: 'proyecto1-logo.png',
        img: 'proyecto1.jpg'
    },
    {
        logo: 'proyecto2-logo.png',
        img: 'proyecto2.jpg'
    }
]

const Proyectos = () => {
    return (
        <div className="row g-0 justify-content-center">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.img}
                    proyecto={proyecto}
                />
            ))}
        </div>
    )
}

export default Proyectos