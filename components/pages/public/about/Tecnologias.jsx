import Image from 'next/image'

const tecnologias = [
    {
        img: 'react.png',
        title: 'React JS'
    },
    {
        img: 'next.png',
        title: 'Next JS'
    },
    {
        img: 'php.png',
        title: 'PHP'
    },
    {
        img: 'mysql.png',
        title: 'MySql'
    }
]

const Tecnologias = () => {
    return (
        <section className='py-4 bg-white'>
            <div className="mx-auto col-11 col-sm-10 col-md-9 col-lg-8 col-xl-6">
                <div className="d-flex justify-content-between flex-wrap">
                    {tecnologias.map(tecnologia => (
                        <div
                            title={tecnologia.title}
                            key={tecnologia.title}
                            className={'opacity-50 m-3'}
                        >
                            <Image
                                src={`/img/${tecnologia.img}`}
                                alt={`Logo ${tecnologia.title}`}
                                width={110}
                                height={110}
                                className={'tecnologia'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tecnologias