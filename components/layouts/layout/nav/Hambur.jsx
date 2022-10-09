const Hambur = ({navShow, setNavShow}) => {
    return (
        <div className="ms-3 d-block d-lg-none position-relative z-index-10">
            <div className="menu-activador">
                <input 
                    type="checkbox" 
                    id="lanzador" 
                    onChange={e => setNavShow(e.target.checked)}
                    checked={navShow}
                />
                <label htmlFor="lanzador">
                    <span className="menu-activador-linea bg-dark"></span>
                    <span className="menu-activador-linea bg-dark"></span>
                    <span className="menu-activador-linea bg-dark"></span>
                </label>
            </div>
        </div>
    )
}

export default Hambur