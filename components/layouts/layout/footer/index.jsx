import Compania from "./Compania"
import Legal from "./Legal"
import Marca from "./Marca"
import Recursos from "./Recursos"

const Footer = () => {
    return (
        <footer className="bg-white py-5">
            <div className="mx-auto col-11 col-sm-10 col-md-9 pt-5">
                <div className="row gy-5 gx-xl-5">
                    <Marca/>

                    <Compania/>
                    
                    <Recursos/>

                    <Legal/>
                </div>
            </div>
        </footer>
    )
}

export default Footer