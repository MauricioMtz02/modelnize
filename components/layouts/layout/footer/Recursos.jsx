const enlaces = [
    {
        name: '¿Necesito una Aplicación Web?',
        href: '#'
    },
    {
        name: 'Mercado Pago como pasarela de pago',
        href: '#'
    }
]

const Recursos = () => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 text-dark">
            <h6><span className="fs-5">Recursos</span> <span className='small opacity-75'>PDF</span></h6>

            <div className="mt-4">
                {enlaces.map(enlace => (
                    <a
                        // target={'_blank'}
                        // rel='noreferrer'
                        key={enlace.name}
                        href={enlace.href}
                    >
                        <span
                            className='fs-6 d-block mb-3 text-decoration-underline cursor-pointer text-dark'
                        >{enlace.name}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Recursos