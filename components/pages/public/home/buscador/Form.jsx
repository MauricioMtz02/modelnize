import { useState } from "react"
import Google from "./Google"

const Form = () => {
    const [domain, setDomain] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // Validar que el dominio no esté vacio
        if(!domain){
            return
        }

        window.open(`https://domains.google.com/express?s=${domain}`, '_blank').focus()
    }

    return (
        <form
            data-aos="fade-right"
            onSubmit={handleSubmit}
        >
            <Google/>
            <p className="small text-dark">Verifique la disponibilidad del dominio en el buscador.</p>
            <div className="d-flex shadow-sm">
                <input
                    type="text"
                    className="form-control border-0 py-3 bg-light text-dark rounded-0 rounded-start"
                    placeholder="Ejemplo: modelnize.com"
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                />
                <button className="btn btn-info border-0 py-3 rounded-0 rounded-end">
                    Buscar
                </button>
            </div>
        </form>
    )
}

export default Form