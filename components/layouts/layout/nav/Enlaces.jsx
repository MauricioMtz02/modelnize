import Enlace from "./Enlace"

const enlaces = [
    {
        name: 'Inicio',
        href: '/'
    },
    {
        name: 'Blog',
        href: '/blog'
    },
    {
        name: 'Acerca De',
        href: '/about'
    },
    {
        name: 'Servicios',
        href: '/servicios'
    },
    {
        name: 'Portafolio',
        href: '/portafolio'
    }
]

const Enlaces = ({navShow, setNavShow}) => {
    return (
        <ul className={`enlaces d-flex flex-column flex-lg-row justify-content-center text-center text-lg-start bg-light bg-lg-none ${navShow ? 'show' : ''}`}>
            {enlaces.map(enlace => (
                <Enlace
                    key={enlace.name}
                    enlace={enlace}
                    setNavShow={setNavShow}
                />
            ))}
        </ul>
    )
}

export default Enlaces