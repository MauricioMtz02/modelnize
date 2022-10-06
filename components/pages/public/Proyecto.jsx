import Image from 'next/image'

const Proyecto = ({proyecto}) => {
    const {logo, img} = proyecto

    return (
        <div data-aos="fade-up" className="col-md-6 col-xl-4">
            <div
                style={{
                    minHeight: '13rem',
                    backgroundImage: `url(/img/${img})`
                }}
                className="p-5 bg-white bg-image position-relative proyecto"
            >
                <div 
                    className={'position-absolute top-50 start-50 translate-middle logo'}
                >
                    <Image
                        src={`/img/${logo}`}
                        alt={'logotipo'}
                        width={120}
                        height={120}
                    />
                </div>

                <button className='position-absolute bottom-0 start-50 translate-middle btn btn-primary text-white'>Ver Proyecto</button>

                <div className="cortina-negra"></div>
            </div>
        </div>
    )
}

export default Proyecto