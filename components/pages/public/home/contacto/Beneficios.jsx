import Beneficio from "./Beneficio"

const beneficios = [
    {
        title: 'Mayor Alcance',
        description: 'Maximice su publico potencial.',
        icon: 'person-plus'
    },
    {
        title: 'Servicio 24/7',
        description: 'Disponible cualquier día y hora.',
        icon: 'clock'
    },
    {
        title: 'Innovación',
        description: 'Transmita una presencial digital.',
        icon: 'lightbulb'
    }
]

const Beneficios = () => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            {beneficios.map(beneficio => <Beneficio key={beneficio.title} beneficio={beneficio} />)}
        </div>
    )
}

export default Beneficios