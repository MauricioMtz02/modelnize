import Image from "next/image"

const Testimonio = ({testimonio}) => {
    const { firstname, lastname, content } = testimonio

    return (
        <div data-aos="fade-up" className="col-md-6 col-xxl-4">
            <div className="p-5 bg-white rounded-4 shadow-sm">
                <div className="d-flex justify-content-between text-dark">
                    <h5 className="me-3">{firstname} {lastname}</h5>

                    <div>
                        <Image
                            src={`${process.env.URL_AVATAR}&name=${firstname}`}
                            alt={'picture'}
                            width={55}
                            height={55}
                            className={'rounded-circle shadow-sm'}
                        />
                    </div>
                </div>

                <p className="text-dark opacity-75 mt-3 mb-0 text-center">{content}</p>
            </div>
        </div>
    )
}

export default Testimonio