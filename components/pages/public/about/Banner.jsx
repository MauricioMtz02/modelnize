import Image from 'next/image'
import Section from "../Section"

const Banner = () => {
    return (
        <>
            <Section
                first={
                    <>
                        <div className="text-center text-lg-start col-lg-10">
                            <h5 className="text-primary">Acerca De</h5>
                            <h1 className="display-4 fw-semibold">Desarrollamos facilidad en tu negocio</h1>
                            <p className="mb-0 mt-4">Conoce nuestro trabajo, la metodología que seguimos y las tecnologías que implementamos en cada proyecto.</p>
                        </div>
                    </>
                }

                last={
                    <div data-aos="fade-right">
                        <Image
                            src={`/img/acercade.jpg`}
                            alt={'img section'}
                            width={800}
                            height={534}
                            className={'mw-100 rounded-4 shadow-sm'}
                            priority
                        />
                    </div>
                }
            />   
        </>
    )
}

export default Banner