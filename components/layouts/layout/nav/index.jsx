import { useState, useEffect } from 'react'
import Link from 'next/link'
import BtnDarkMode from './BtnDarkMode'
import Enlaces from './Enlaces'
import Hambur from './Hambur'
import Logo from './Logo'

const Nav = () => {
    const [navShow, setNavShow] = useState(false)
    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        const scrollNav = () => {
            window.addEventListener('scroll', () => {
                const section = document.querySelector('main *')
                const ubicacion = section.getBoundingClientRect()

                if(ubicacion.top < -100){
                    if(!fixed){
                        setFixed(true)
                    }
                } else{
                    if(!fixed){
                        setFixed(false)
                    }
                }
            })
        }

        scrollNav()
    }, [fixed])

    return (
        <nav className={`nav-principal bg-light ${fixed ? 'fixed shadow-sm border-bottom py-3' : 'py-4'}`}>
            <div className='col-11 mx-auto d-flex justify-content-between align-items-center'>
                <Logo/>

                <Enlaces
                    navShow={navShow}
                    setNavShow={setNavShow}
                />

                <div className='d-flex align-items-center'>
                    <BtnDarkMode/>
                    
                    <Link href={'#'}>
                        <a className='btn btn-primary text-white'>
                            Comenzar
                        </a>
                    </Link>

                    <Hambur
                        navShow={navShow}
                        setNavShow={setNavShow}
                    />
                </div>
            </div>
            
        </nav>
    )
}

export default Nav