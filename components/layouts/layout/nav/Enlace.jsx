import Link from 'next/link'
import { useRouter } from 'next/router'

const Enlace = ({enlace, setNavShow}) => {
    const {name, href} = enlace
    const {pathname} = useRouter()

    return (
        <li className='mx-1 py-2 py-lg-0'>
            <Link
                href={href}
            >
                <a
                    onClick={() => setNavShow(false)}
                    className={`btn outline-none rounded-0 ${pathname === href ? 'border-bottom border-primary text-primary' : 'text-dark'}`}
                >
                    {name}
                </a>
            </Link>
        </li>
    )
}

export default Enlace