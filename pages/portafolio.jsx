import Development from '../components/utilities/status/Development'
import Layout from '../layouts/Layout'

export default function PortafolioPage() {
    return (
        <>
            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <Development
                    page={'portafolio'}
                />
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