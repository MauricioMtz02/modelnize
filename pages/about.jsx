import Acerca from '../components/pages/public/about/Acerca'
import Banner from '../components/pages/public/about/Banner'
import Hero from '../components/pages/public/about/Hero'
import Metodologia from '../components/pages/public/about/metodologia'
import Tecnologias from '../components/pages/public/about/Tecnologias'
import Valores from '../components/pages/public/about/valores'
import Layout from '../layouts/Layout'

export default function AboutPage() {
    return (
        <>
            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <Banner/>
            </div>

            <div className="mt-4 py-4 py-lg-5">
                <Tecnologias/>
            </div>

            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <div className="mt-4 py-4 py-lg-5">
                    <Acerca/>
                </div>

                <div className="mt-4 py-4 py-lg-5">
                    <Valores/>
                </div>

                <div className="mt-4 py-4 py-lg-5">
                    <Hero/>
                </div>

                <div className="mt-4 py-4 py-lg-5">
                    <Metodologia/>
                </div>

                <div className="mt-4 py-4 py-lg-5">
                    Contacto
                </div>
            </div>
        </>
    )
}

AboutPage.getLayout = function getLayout(page) {
    return (
        <Layout page={'Acerca De'}>
            {page}
        </Layout>
    )
}