import Beneficios from "./Beneficios"
import Form from "./Form"
import RedesSociales from "./RedesSociales"

const Contacto = () => {
    return (
        <section>
            <div className="text-dark text-center">
                <h3>Contacto</h3>
                <p>¡<span className="text-primary">Comience hoy mismo</span>! Obtenga una presencia digital con su negocio.</p>
            </div>

            <div className="my-4 my-lg-5">
                <RedesSociales/>
            </div>

            <div className="p-3 p-md-4 p-lg-5 position-relative">
                <div className="mx-auto col-xl-10 opacity-75 position-relative z-index-5">
                    <Beneficios/>
                </div>

                <div className="mt-4 mt-lg-5 mx-auto col-md-10 col-lg-9 col-xl-6 position-relative z-index-5">
                    <Form/>
                </div>

                <div className="position-absolute start-0 top-0 w-100 h-50 bg-primary rounded-4 shadow-sm"></div>
            </div>
        </section>
    )
}

export default Contacto