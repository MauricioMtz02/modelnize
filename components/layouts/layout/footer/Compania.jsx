import Link from 'next/link'

const enlaces = [
    {
        name: 'Acerca De',
        href: '/about'
    },
    {
        name: 'Blog',
        href: '/blog'
    },
    {
        name: 'Precios',
        href: '#'
    }
]

const Compania = () => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 text-dark">
            <h6 className="fs-5">Compañia</h6>

            <div className="mt-4">
                {enlaces.map(enlace => (
                    <Link
                        key={enlace.name}
                        href={enlace.href}
                    >
                        <span
                            className='d-block fs-6 mb-3 text-decoration-underline cursor-pointer text-dark'
                        >{enlace.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Compania