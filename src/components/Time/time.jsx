import Cards from './Cards/cards'
import './Time.css'


const Time = (props) => {


    const styles = {
        backgroundColor: props.corSecundaria,
    }


    return (
        (props.membros.length > 0) &&
        <section style={styles} className='time'>
            <p style={{ borderColor: props.corPrimaria }}>{props.nome}</p>
            <div className='cards'>
                {props.membros.map(membro => <Cards
                    key={membro.nome}
                    nome={membro.nome}
                    cargo={membro.cargo}
                    img={membro.img}
                    corPrimaria={props.corPrimaria}
                />)}
            </div>
        </section>
    )

}

export default Time