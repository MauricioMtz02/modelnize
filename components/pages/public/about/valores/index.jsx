import Valor from "./Valor"

const valores = [
    {
        title: 'Solución',
        img: 'solucion.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Creatividad',
        img: 'creatividad.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Innovación',
        img: 'innovacion.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Eficiencia',
        img: 'eficiente.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Pasión',
        img: 'pasion.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        title: 'Comunicación',
        img: 'comunicacion.png',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    }
]

const Valores = () => {
    return (
        <section>
            <div className="text-center text-dark mb-4">
                <h3>Valores</h3>
                <p className="small mb-0">Texto para listar los <span className="text-primary">Valores</span></p>
            </div>

            <div className="row gx-0 gy-4 g-md-5 justify-content-center">
                {valores.map(valor => (
                    <Valor
                        key={valor.title}
                        valor={valor}
                    />
                ))}
            </div>
        </section>
    )
}

export default Valores