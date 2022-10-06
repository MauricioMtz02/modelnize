import Layout from '../layouts/Layout'

export default function PortafolioPage() {
    return (
        <>
            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <h1 className='text-dark'>Hola desde Portafolio</h1>
            </div>
        </>
    )
}

PortafolioPage.getLayout = function getLayout(page) {
    return (
        <Layout page={'Portafolio'}>
            {page}
        </Layout>
    )
}