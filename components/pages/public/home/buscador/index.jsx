import Section from "../../Section"
import Form from "./Form"

const Buscador = () => {
    return (
        <div className="bg-white py-5 px-md-5 d-flex">
            <div className="py-5 mx-auto col-11 col-sm-10 col-md-9">
                <Section
                    first={(
                        <>
                            <div>
                                <h3>Agrégale un <span className="text-primary">.com</span> a tu negocio</h3>
                                <p className="mb-0">Mediante un dominio sus clientes podrán en internet, es la forma amigable de localizar su sitio en la web.</p>
                            </div>
                        </>
                    )}

                    last={(
                        <Form/>
                    )}
                />
            </div>
        </div>
    )
}

export default Buscador