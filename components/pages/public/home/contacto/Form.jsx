const Form = () => {

    const handleSubmit = e => {
        e.preventDefault()

        console.log('enviando msg...')
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="bg-white p-4 p-md-5 rounded-4 shadow-sm"
        >
            <div className="row g-0 gx-md-4 text-dark">
                <div className="col-md-12 mb-4">
                    <label
                        htmlFor="" 
                        className="form-label small"
                    >
                        Nombre Completo
                    </label>

                    <input
                        type="text"
                        placeholder="Ejemplo: Carlos Contreras"
                        className="form-control text-dark bg-light border-0 shadow-sm"
                    />
                </div>

                <div className="col-md-6 mb-4">
                    <label
                        htmlFor="" 
                        className="form-label small"
                    >
                        Correo
                    </label>

                    <input
                        type="email"
                        placeholder="Ejemplo: carlos@gmail.com"
                        className="form-control text-dark bg-light border-0 shadow-sm"
                    />
                </div>

                <div className="col-md-6 mb-4">
                    <label
                        htmlFor="" 
                        className="form-label small"
                    >
                        Teléfono
                    </label>

                    <input
                        type="tel"
                        placeholder="Ejemplo: 271 000 00 00"
                        className="form-control text-dark bg-light border-0 shadow-sm"
                    />
                </div>

                <div className="col-md-12 mb-4">
                    <label
                        htmlFor="" 
                        className="form-label small"
                    >
                        Compania
                    </label>

                    <input
                        type="text"
                        placeholder="Ejemplo: Modelnize"
                        className="form-control text-dark bg-light border-0 shadow-sm"
                    />
                </div>

                <div className="col-md-12 mb-4">
                    <label
                        htmlFor="" 
                        className="form-label small"
                    >
                        Asunto
                    </label>

                    <input
                        type="text"
                        placeholder="Ejemplo: Cotización para Aplicación Web"
                        className="form-control text-dark bg-light border-0 shadow-sm"
                    />
                </div>

                <div className="col-md-12 mb-4">
                    <label
                        htmlFor="" 
                        className="form-label small"
                    >
                        Mensaje
                    </label>

                    <textarea
                        rows="4"
                        className="form-control text-dark bg-light border-0 shadow-sm"
                    >
                        
                    </textarea>
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary text-white px-5 shadow-sm"
            >
                Enviar
            </button>
        </form>
    )
}

export default Form