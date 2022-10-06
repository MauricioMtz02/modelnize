import Layout from '../layouts/Layout'

export default function AboutPage() {
    return (
        <>
            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <h1 className='text-dark'>Hola desde Acerca De</h1>
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