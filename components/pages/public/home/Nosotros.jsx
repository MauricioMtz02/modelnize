import Image from 'next/image'
import Link from 'next/link'
import  Section from "../Section"

const Nosotros = () => {
    return (
        <Section
            invert={true}
            first={(
                <div className='text-lg-end'>
                    <div>
                        <h3>Sobre Nosotros</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis voluptatibus! Reiciendis placeat delectus omnis maxime inventore eius nesciunt totam magnam natus sit.</p>
                    </div>
                    

                    <Link href={'/'}>
                        <a className='btn btn-primary text-white'>Ver Más</a>
                    </Link>
                </div>
            )}

            last={(
                <div data-aos="fade-right">
                    <Image
                        src={`/img/nosotros.jpg`}
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

export default Nosotros