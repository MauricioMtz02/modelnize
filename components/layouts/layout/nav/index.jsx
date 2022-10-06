import { useState } from 'react'
import Link from 'next/link'
import BtnDarkMode from './BtnDarkMode'
import Enlaces from './Enlaces'
import Hambur from './Hambur'

const Nav = () => {
    const [navShow, setNavShow] = useState(false)

    return (
        <nav className='py-4 nav-principal'>
            <div className='col-11 mx-auto d-flex justify-content-between align-items-center'>
                <Link
                    href={'/'}
                >
                    <h2 className='mb-0 cursor-pointer fs-3 text-uppercase fw-bold text-primary'>Modelnize</h2>
                </Link>

                <Enlaces
                    navShow={navShow}
                />

                <div className='d-flex align-items-center'>
                    <BtnDarkMode/>
                    
                    <Link href={'#'}>
                        <a className='btn btn-primary text-white'>
                            Comenzar
                        </a>
                    </Link>

                    <Hambur
                        setNavShow={setNavShow}
                    />
                </div>
            </div>
            
        </nav>
    )
}

export default Nav