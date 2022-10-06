import Link from 'next/link'
import Image from 'next/image'
import Section from "../Section"

const Avanzando = () => {
    return (
        <Section
            invert={true}
            first={(
                <div className='text-lg-end'>
                    <div>
                        <h3>La tecnología sigue avanzando, al igual que tú</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis voluptatibus! Reiciendis placeat delectus omnis maxime inventore eius nesciunt totam magnam natus sit.</p>
                    </div>
                    

                    <Link href={'/blog'}>
                        <a className='btn btn-primary text-white'>Ver Blog</a>
                    </Link>
                </div>
            )}

            last={(
                <div data-aos="fade-right">
                    <Image
                        src={`/img/avanzando.jpg`}
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

export default Avanzando