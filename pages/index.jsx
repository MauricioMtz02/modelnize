import Layout from '../layouts/Layout'
import Gestion from '../components/pages/public/home/Gestion'
import Productos from '../components/pages/public/home/productos'
import Avanzando from '../components/pages/public/home/Avanzando'
import Paquetes from '../components/paquetes'
import Buscador from '../components/pages/public/home/buscador'
import Portafolio from '../components/pages/public/home/portafolio'
import Nosotros from '../components/pages/public/home/Nosotros'
import Contacto from '../components/pages/public/home/contacto'
import Testimonios from '../components/pages/public/home/testimonios'

export default function HomePage() {
    return (
        <>
            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <div className='pb-4 pb-lg-5'>
                    <Gestion/>
                </div>

                <div className='mt-0 mt-4 mt-lg-5 py-4 py-lg-5'>
                    <Productos/>
                </div>

                <div className='mt-4 py-4 py-lg-5'>
                    <Avanzando/>
                </div>

                <div className='mt-4 py-4 py-lg-5'>
                    <Paquetes/>
                </div>
            </div>

            <div className='mt-4 py-4 py-lg-5'>
                <Buscador/>
            </div>

            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <div className='mt-4 py-4 py-lg-5'>
                    <Portafolio/>
                </div>

                <div className='mt-4 py-4 py-lg-5'>
                    <Nosotros/>
                </div>

                <div className='mt-4 py-4 py-lg-5'>
                    <Contacto/>
                </div>

                <div className='mt-4 py-4 py-lg-5'>
                    <Testimonios/>
                </div>
            </div>
        </>
    )
}

HomePage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}