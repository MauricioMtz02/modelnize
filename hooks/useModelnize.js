import { useContext } from 'react'
import ModelnizeContext from '../context/ModelnizeProvider'

const useModelnize = () => {
    return useContext(ModelnizeContext)
}

export default useModelnize