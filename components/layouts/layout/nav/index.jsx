import { useState } from 'react'
import Link from 'next/link'
import BtnDarkMode from './BtnDarkMode'
import Enlaces from './Enlaces'
import Hambur from './Hambur'
import Logo from './Logo'

const Nav = () => {
    const [navShow, setNavShow] = useState(false)

    return (
        <nav className='py-4 nav-principal'>
            <div className='col-11 mx-auto d-flex justify-content-between align-items-center'>
                <Logo/>

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