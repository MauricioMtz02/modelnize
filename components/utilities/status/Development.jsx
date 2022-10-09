import Image from 'next/image'
import Link from 'next/link'

const Development = ({page}) => {
    return (
        <div className='d-flex flex-column flex-lg-row align-items-center'>
            <div>
                <Image
                    src={'/img/desarrollo.svg'}
                    alt={'en desarrollo'}
                    width={600}
                    height={387}
                />
            </div>


            <div className='order-first order-lg-last mb-4 mb-lg-0 text-center text-lg-start'>
                <div className='d-flex flex-column flex-md-row align-items-center text-dark'>
                    <div className='me-3'>
                        <i className='fs-1 bi bi-nut-fill girar'></i>
                    </div>
                    <h2 className=''>El {page} se encuentra en desarrollo...</h2>
                </div>

                <Link
                    href={'/'}
                >
                    <a className='text-white px-4 btn btn-primary mt-4'>Volver al Inicio</a>
                </Link>
            </div>
            
        </div>
    )
}

export default Development