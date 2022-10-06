import Layout from '../layouts/Layout'

export default function ServiciosPage() {
    return (
        <>
            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <h1 className='text-dark'>Hola desde Servicios</h1>
            </div>
        </>
    )
}

ServiciosPage.getLayout = function getLayout(page) {
    return (
        <Layout page={'Servicios'}>
            {page}
        </Layout>
    )
}