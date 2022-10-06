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