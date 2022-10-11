import Image from 'next/image'

const FaseButton = ({fase, faseActual, setFaseActual}) => {
    const { id, name, icon } = fase

    const isSelected = () => {
        return id === faseActual.id
    }

    return (
        <div className="col-6 col-md-4 col-lg-6 col-xl-4">
            <button
                onClick={() => setFaseActual(fase)}
                className={`w-100 h-100 border-0 p-2 rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-center ${isSelected() ? 'bg-primary text-light' : 'bg-white text-dark'}`}
            >
                <p
                    style={{
                        width: '30px',
                        height: '30px'
                    }}
                    className={`m-0 p-2 rounded-circle d-flex justify-content-center align-items-center ${isSelected() ? 'text-primary bg-light' : 'text-light bg-primary'}`}
                >
                    <span>{id}</span>
                </p>
                <h6 className="m-0 my-2">{name}</h6>
                <div>
                    <Image
                        src={`/img/${icon}`}
                        alt={`icon ${name}`}
                        width={40}
                        height={40}
                    />
                </div>
            </button>
        </div>
    )
}

export default FaseButton