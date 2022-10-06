const Section = ({first, last, invert = false}) => {
    return (
        <section className='row me-0 mx-auto gx-5 justify-content-between align-items-center'>
            <div className={`text-dark col-12 col-lg-6 ${invert && 'order-first order-lg-last'}`}>
                {first}
            </div>

            <div className="mt-4 mt-lg-0 col-12 col-lg-6 col-xxl-5">
                {last}
            </div>
        </section>
    )
}

export default Section