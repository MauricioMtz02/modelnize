import Link from 'next/link'

const Banner = () => {
    return (
        <section className="py-5 position-relative">
            <div className="mx-auto col-11 col-sm-10 col-md-9 position-relative z-index-1">
                <div className="mx-auto col-lg-8 col-xl-7 text-dark text-center">
                    <h1 className="display-4 fw-normal">Comienza a crecer en el mundo digital</h1>
                    <p>Ofrece a tus clientes una nueva forma de conocerte</p>

                    <div className="d-flex justify-content-center">
                        <Link href={'#'}>
                            <a className='btn btn-info me-3 text-white'>Ver Servicios</a>
                        </Link>

                        <Link href={'#'}>
                            <a className='btn btn-secondary text-white'>Contactar</a>
                        </Link>
                    </div>
                </div>

                <div className='mt-5 d-flex justify-content-center mw-100'>
                    <div className='rounded-3'>
                        <video className='rounded-3 img-fluid shadow' autoPlay muted loop width={700} height={380}>
                            <source src='/videos/banner.mp4' />
                        </video>
                    </div>
                </div>
            </div>

            <div className="position-absolute w-100 h-100 burbujas">
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
            </div>
        </section>
    )
}

export default Banner