import { cutContent } from "../../../../../helpers"
import Image from "next/image"

const Producto = ({producto, i}) => {
    const { name, img, description } = producto


    return (
        <div data-aos="fade-up" className="col-md-6 col-xl-4">
            <div className="p-4 py-5 bg-white rounded-4 shadow-sm text-dark">
                <div className="row gy-4 gy-xxl-0">
                    <div className="mx-auto col-4 col-sm-3 col-md-5 col-lg-4 col-xl-6 col-xxl-4">
                        <Image
                            src={`/img/${img}`}
                            alt={'producto'}
                            width={160}
                            height={160}
                        />
                    </div>

                    <div className="text-start col-sm-9 text-md-center col-md-12 text-xxl-start col-xxl-8">
                        <h5 className="mb-2">{name}</h5>
                        <p className="mb-0">{cutContent(description, 65)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto