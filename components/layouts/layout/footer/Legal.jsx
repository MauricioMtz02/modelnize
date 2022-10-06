import Link from 'next/link'

const enlaces = [
    {
        name: 'Aviso de Privacidad',
        href: '#'
    },
    {
        name: 'Términos y Condiciones',
        href: '#'
    }
]

const Legal = () => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 text-dark">
            <h6 className="fs-5">Legal</h6>

            <div className="mt-4">
                {enlaces.map(enlace => (
                    <Link
                        key={enlace.name}
                        href={enlace.href}
                    >
                        <span
                            className='fs-6 d-block mb-3 text-decoration-underline cursor-pointer text-dark'
                        >{enlace.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Legal