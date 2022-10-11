import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="mx-auto col-12 col-lg-12 col-xxl-10">
            <div className="pt-5 position-relative rounded-4">
                <div className="rounded shadow-sm text-dark">
                    <div className="row g-0">
                        <div className="col-lg-8">
                            <div className="p-5 bg-white rounded-4">
                                <h5>Desarrollo de soluciones para su negocio</h5>
                                <p className="mb-0 mt-3 me-xl-4">Identificamos los problemas y necesidades a las que se enfrenta un negocio para resolverlas mediante el uso e implementación del desarrollo web.</p>

                                <Link
                                    href={'/#contacto'}
                                >
                                    <a className='btn btn-primary px-4 text-white mt-3'>Comenzar</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-primary w-100 h-100 d-block rounded-4 d-flex justify-content-end">
                                <div
                                    className='img-hero pe-3 pe-lg-0 pt-3 pt-lg-0'
                                >
                                    <Image
                                        src={'/img/person.png'}
                                        alt={'person'}
                                        width={246}
                                        height={400}
                                        className={'mh-100 m-0 p-0'}
                                        data-aos="fade-right"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero