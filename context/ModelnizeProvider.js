import { useState, useEffect, createContext } from 'react'
import { setLocalStorage } from '../helpers'

const ModelnizeContext = createContext()

const ModelnizeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const redesSociales = [
        {
            name: 'Whatsapp',
            icon: 'whatsapp',
            href: '#'
        },
        {
            name: 'Facebook',
            icon: 'facebook',
            href: '#'
        },
        {
            name: 'Instagram',
            icon: 'instagram',
            href: '#'
        },
        {
            name: 'Correo',
            icon: 'envelope',
            href: '#'
        }
    ]

    useEffect(() => {
        getDarkMode()
    }, [])

    useEffect(() => {
        const body = document.querySelector('body')
        if(!darkMode){
            if(body.classList.contains('dark-mode')){
                 body.classList.remove('dark-mode') 
            }
         } else{
             body.classList.add('dark-mode') 
         }
    }, [darkMode])

    const getDarkMode = () => {
        const localDark = JSON.parse(localStorage.getItem('darkMode'))

        if(localDark){
            setDarkMode(localDark)
        }
    }

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        setLocalStorage(!darkMode, 'darkMode')
    }

    return(
        <ModelnizeContext.Provider
            value={{
                darkMode,
                handleDarkMode,
                redesSociales
            }}
        >
            {children}
        </ModelnizeContext.Provider>
    )
}

export {
    ModelnizeProvider
}

export default ModelnizeContext