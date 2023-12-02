import './button.css'

const Button = (props) => {



    return (
        <div className='botao-criarcard'>
            <button type="submit">
                {props.texto}
            </button>
        </div>
    )
}


export default Button