import './cards.css'


const Cards = (props) => {


    const bgStyles = {
        background: `linear-gradient(${props.corPrimaria} 130px, #fff 0px)`
    }

    return (
        <div className='card' style={bgStyles}>

            <div className='imagem'>
                <img src={props.img} alt='' />
            </div>

            <div className='info_card'>
                <h3>{props.nome}</h3>
                <span>{props.cargo}</span>
            </div>

        </div>
    )

}


export default Cards