import Link from 'next/link'
import Image from 'next/image'
import Section from "../Section"

const Contacto = () => {
    return (
        <Section
            invert={true}
            first={(
                <div className='text-lg-end'>
                    <div>
                        <h3>Contactanos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis voluptatibus! Reiciendis placeat delectus omnis maxime inventore eius nesciunt totam magnam natus sit.</p>
                    </div>
                    

                    <Link href={'/#contacto'}>
                        <a className='btn btn-primary text-white'>Contactar</a>
                    </Link>
                </div>
            )}

            last={(
                <div data-aos="fade-right">
                    <Image
                        src={`/img/contacto.jpg`}
                        alt={'img section'}
                        width={800}
                        height={534}
                        className={'mw-100 rounded-4 shadow-sm'}
                    />
                </div>
            )}
        />
    )
}

export default Contacto