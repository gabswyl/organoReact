import './listas.css'

const Listas = (props) => {
    return (
        <div className="times">
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} value={props.valor}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default Listas