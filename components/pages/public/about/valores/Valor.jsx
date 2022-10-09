import Image from 'next/image'

const Valor = ({valor}) => {
    const {title, img, description} = valor

    return (
        <div data-aos="fade-up" className="col-md-6 col-xl-4">
            <div className="bg-white rounded-4 shadow-sm p-5 text-dark text-center">
                <div className="d-flex align-items-center flex-column">
                    <Image
                        src={`/img/${img}`}
                        alt={`icon ${title}`}
                        width={44}
                        height={44}
                        layout={'fixed'}
                    />
                    <h5 className='mt-2'>{title}</h5>
                </div>

                <p className='mb-0 mt-3'>{description}</p>
            </div>
        </div>
    )
}

export default Valor