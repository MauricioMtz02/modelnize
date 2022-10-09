import Development from '../components/utilities/status/Development'
import Layout from '../layouts/Layout'

export default function BlogPage() {
    return (
        <>
            <div className='mx-auto col-11 col-sm-10 col-md-9'>
                <Development
                    page={'blog'}
                />
            </div>
        </>
    )
}

BlogPage.getLayout = function getLayout(page) {
    return (
        <Layout page={'Blog'}>
            {page}
        </Layout>
    )
}