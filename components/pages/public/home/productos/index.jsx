import Producto from './Producto'

const productos = [
    {
        name: 'Sitios Web',
        description: 'Obtenga una presencia digital mostrando la información de su negocio en un sitio web atractivo y disponible para diferentes dispositivos inteligentes.',
        img: 'sitios-web.png'
    },
    {
        name: 'Web Blog',
        description: 'Redacte y comparta contenido de interés para sus clientes y/o seguidores. Reciba comentarios y consulte las visualizaciones de sus artículos.',
        img: 'blog.png'
    },
    {
        name: 'Ecommerce',
        description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores.',
        img: 'ecommerce.png'
    },
    {
        name: 'Catalogo Digital',
        description: 'Ofrezca sus productos o servicios a través de un catálogo interactivo y atractivo. Muestre imágenes y precios de cada uno de sus productos.',
        img: 'catalogo-digital.png'
    },
    {
        name: 'Aplicaciones Web',
        description: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores.',
        img: 'apliaciones-web.png'
    }
]

const Productos = () => {
    return (
        <section className="text-dark">
            <h3 className="text-center">Nuestros Productos</h3>

            <div className="mt-2 mt-md-4 row gx-0 gy-3 g-md-5 justify-content-center">
                {productos.map((producto, i) => (
                    <Producto
                        key={producto.name}
                        producto={producto}
                        i={i}
                    />
                ))}
            </div>
        </section>
    )
}

export default Productos