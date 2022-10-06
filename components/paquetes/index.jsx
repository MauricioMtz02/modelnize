import Paquete from "./Paquete"

const Paquetes = () => {
    return (
        <section className="text-dark mx-auto col-xxl-11">
            <h3 className="text-center">Paquetes y Precios</h3>

            <div className="row mt-4 gy-4 gx-lg-5 justify-content-center">
                <Paquete/>
                <Paquete/>
                <Paquete/>
            </div>
        </section>
    )
}

export default Paquetes