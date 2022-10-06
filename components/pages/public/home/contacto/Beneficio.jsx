const Beneficio = ({beneficio}) => {
    const { title, description, icon } = beneficio

    return (
        <div data-aos="fade-up" className="d-flex text-white m-3 m-xl-4">
            <div>
                <i className={`bi bi-${icon} fs-3`}></i>
            </div>

            <div className="ms-3">
                <h6>{title}</h6>
                <span className="d-block small mb-0">{description}</span>
            </div>
        </div>
    )
}

export default Beneficio