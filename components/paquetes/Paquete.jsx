import Caracteristicas from "./Caracteristicas"

const Paquete = () => {
    return (
        <div data-aos="fade-up" className="col-md-6 col-xl-4">
            <div className="rounded-4 bg-white p-4 p-md-5 shadow-sm">
                <div className="text-center text-uppercase">
                    <h4 className="text-info fw-semibold mb-0">Básico</h4>
                    <p className="text-dark mb-0 fw-normal">Lorem Ipsum</p>
                </div>

                <div className="my-5">
                    <p className="mb-0 d-flex align-items-start justify-content-center text-dark">
                        <span className="fs-4 me-2 fw-bold">$</span>
                        <span className="display-4 fw-bold">0,000</span>
                    </p>
                </div>

                <Caracteristicas/>

                <div className="mt-5 d-flex justify-content-center">
                    <button className="btn btn-primary px-5 text-white">
                        Ver Más
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Paquete