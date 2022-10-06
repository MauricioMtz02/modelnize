import Link from 'next/link'
import RedesSociales from './RedesSociales'

const Marca = () => {
    return (
        <div className='col-sm-6 col-lg-4 col-xl-3'>
            <Link
                href={'/'}
            >
                <span className='cursor-pointer fs-4 text-dark fw-semibold text-decoration-none'>
                    Modelnize
                </span>
            </Link>

            <p className='text-dark mb-0 fs-7 mt-3' style={{fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam, eligendi praesentium repudiandae.</p>

            <div className='mt-4'>
                <RedesSociales/>
            </div>
        </div>
    )
}

export default Marca