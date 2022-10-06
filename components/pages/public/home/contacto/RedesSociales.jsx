import useModelnize from "../../../../../hooks/useModelnize"
import RedSocial from "./RedSocial"

const RedesSociales = () => {
    const {redesSociales} = useModelnize()

    return (
        <div className="d-flex justify-content-center">
            {redesSociales.map(redSocial => <RedSocial key={redSocial.name} redSocial={redSocial} />)}
        </div>
    )
}

export default RedesSociales