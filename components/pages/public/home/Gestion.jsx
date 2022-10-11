import Link from 'next/link'
import Image from 'next/image'
import Section from "../Section"

const Gestion = () => {
    return (
        <Section
            first={(
                <>
                    <div>
                        <h3>Controla y gestiona la información de tu negocio</h3>
                        <p>Con el desarrollo de un sistema a su medida es posible gestionar toda la información de su negocio, cómo administrar sus productos y consultar sus reportes y ventas.</p>
                    </div>
                    

                    <Link href={'#'}>
                        <a className='btn btn-primary text-white'>Ver Más</a>
                    </Link>
                </>
            )}

            last={(
                <>
                    <div data-aos="fade-right" className='row justify-content-between bg-white rounded-4 shadow'>
                        <div className='col-sm-8 p-4'>
                            <div className='bg-light p-3 shadow-sm rounded-3 d-flex justify-content-between mb-4 text-dark'>
                                <span className='mb-0'>Productos</span>
                                <span className='mb-0'>View / Add</span>
                            </div>

                            <div className='bg-light p-3 shadow-sm rounded-3 d-flex justify-content-between mb-4 text-dark'>
                                <span className='mb-0'>Clientes</span>
                                <span className='mb-0'>View / Add</span>
                            </div>

                            <div className='bg-light p-3 shadow-sm rounded-3 d-flex justify-content-between text-dark'>
                                <span className='mb-0'>Pedidos</span>
                                <span className='mb-0'>View / Add</span>
                            </div>
                        </div>
                        <div className='col-sm-4 p-0 d-grid justify-content-end align-items-end'>
                            <Image
                                src={'/img/hand.png'}
                                alt={'section 1'}
                                width={147}
                                height={200}
                                className="mw-100 rounded-4"
                                layout='fixed'
                                priority
                            />
                        </div>
                    </div>
                </>
            )}
        />
    )
}

export default Gestion