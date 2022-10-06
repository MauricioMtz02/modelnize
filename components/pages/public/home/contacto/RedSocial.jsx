const RedSocial = ({redSocial}) => {
    const { name, icon, href } = redSocial 

    return (
        <a
            title={name}
            href={href}
            target={'_blank'}
            rel='noreferrer'
            style={{
                width: '48px',
                height: '48px'
            }}
            className={'bg-white rounded-circle shadow-sm mx-2 text-decoration-none d-flex justify-content-center align-items-center'}
        >
            <i className={`text-dark bi bi-${icon}`}></i>
        </a>
    )
}

export default RedSocial