import Image from "next/image"
import Link from 'next/link'

const Logo = () => {
    return (
        <Link
            href={'/'}
        >
            <div className="d-flex align-items-center cursor-pointer">
                <Image
                    src={`/img/logo.svg`}
                    alt={'logotipo modelnize'}
                    width={44}
                    height={44}
                    className={'rounded'}
                />
                <h2 className='ms-2 d-none d-md-inline mb-0 fs-3 text-uppercase fw-bold text-dark'>Modelnize</h2>
            </div>
        </Link>
        
    )
}

export default Logo