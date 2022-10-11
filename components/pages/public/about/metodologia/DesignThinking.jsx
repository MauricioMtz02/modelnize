import { useState } from 'react'
import Section from "../../Section"
import FaseButton from "./FaseButton"

const fases = [
    {
        id: '1',
        name: 'Empatizar',
        icon: 'empatizar.png',
        description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
    },
    {
        id: '2',
        name: 'Definir',
        icon: 'definir.png',
        description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
    },
    {
        id: '3',
        name: 'Idear',
        icon: 'idear.png',
        description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
    },
    {
        id: '4',
        name: 'Prototipar',
        icon: 'prototipar.png',
        description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
    },
    {
        id: '5',
        name: 'Testear',
        icon: 'testear.png',
        description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
    },
    {
        id: '6',
        name: 'Implementar',
        icon: 'implementar.png',
        description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final'
    }
]

const DesignThinking = () => {
    const [faseActual, setFaseActual] = useState(fases[0])

    return (
        <Section
            first={
                <div>
                    <div className="row g-4">
                        {fases.map(fase => <FaseButton key={fase.id} fase={fase} faseActual={faseActual} setFaseActual={setFaseActual} />)}
                    </div>
                </div>
            }
        
            last={
                <div className="bg-white rounded-4 p-3 px-4">
                    <h6 className='d-flex align-items-center'>
                        <p
                            style={{
                                width: '30px',
                                height: '30px'
                            }}
                            className='m-0 p-2 rounded-circle d-flex justify-content-center align-items-center text-white bg-primary'
                        >
                            <span>{faseActual.id}</span>
                        </p>
                        <span className='ms-2'>{faseActual.name}</span>
                    </h6>

                    <div className='row'>
                        <div className="col-12">
                            <p className='m-0'>{faseActual.description}</p>
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default DesignThinking