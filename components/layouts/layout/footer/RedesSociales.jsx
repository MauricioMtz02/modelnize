import Link from 'next/link'
import useModelnize from "../../../../hooks/useModelnize"

const RedesSociales = () => {
    const {redesSociales} = useModelnize()

    return (
        <div className="d-flex">
            {redesSociales.map(redSocial => (
                <a
                    target={'_blank'}
                    rel='noreferrer'
                    href={redSocial.href}
                    key={redSocial.name}
                    className="mb-0 mx-2 fs-5 text-decoration-none text-primary"
                >
                    <i className={`bi bi-${redSocial.icon}`}></i>
                </a>
            ))}
        </div>
    )
}

export default RedesSociales