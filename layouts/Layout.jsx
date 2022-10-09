import { useEffect } from 'react'
import { useRouter } from 'next/router'
import AOS from 'aos'
import Head from "next/head"
import Banner from "../components/layouts/layout/Banner"
import Nav from '../components/layouts/layout/nav'
import Footer from '../components/layouts/layout/footer'

const Layout = ({page, children}) => {
    const {pathname} = useRouter()

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <Head>
                <title>{page} - Modelnize</title>
                <meta
                    name='description'
                    content='Diseño y Desarrollo de Aplicaciones Web'
                />

                <meta name="robots" content="index" />
                <meta name="keywords" content='aplicaciones, tecnologia, moderno, web, sitios, administrar, negocio, digital, blog, diseño, desarrollo, proyecto, programa, aplicacion, programas, sistemas, sistema' />
                <meta property="og:image" content={`/img/logo.svg`} />
                <meta property="og:image:url" content={`/img/logo.svg`} />
                <meta property="og:image:secure_url" content={`/img/logo.svg`} />

                <meta itemProp="name" content='Modelnize diño y desarrollo de aplicaciones web' />
                <meta itemProp="headline" content='Modelnize diño y desarrollo de aplicaciones web' />
                <meta itemProp="description" content='Agencia de diseño y desarrollo web' />
            </Head>

            <div className="bg-light">
                <header>
                    <Nav/>

                    {pathname === '/' && <Banner/>}
                </header>

                <main className="py-5">
                    {children}
                </main>
            </div>

            <Footer/>
        </>
    )
}

Layout.defaultProps = {
    page: 'Diseño y Desarrollo Web'
}

export default Layout