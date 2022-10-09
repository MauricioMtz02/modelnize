import Image from 'next/image'
import Section from "../Section"

const Acerca = () => {
    return (
        <Section
            first={(
                <div>
                    <div>
                        <h3>Acerca De</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nulla esse distinctio vitae quam eveniet consequuntur vero inventore, repellat necessitatibus, officia officiis sapiente minima facilis nemo! At cupiditate illum ipsum?</p>
                    </div>
                </div>
            )}

            last={(
                <div data-aos="fade-right">
                    <Image
                        src={`/img/acerca-modelnize.jpg`}
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

export default Acerca