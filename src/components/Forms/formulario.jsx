import Button from "./Botao/button"
import Listas from "./Listas/listas"
import Forms from "./campoTexto/forms"
import "./formulario.css"
import { useState } from "react"


const Formulario = (props) => {

    const times = [
        "Programação", 
        "Front-end", 
        "Data-Science", 
        "DevOps", 
        "UX e Design", 
        "Mobile", 
        "Inovação e Gestão"
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault();
        props.userCadastrado({
            nome,
            cargo,
            img,
            time
        })
    }


    return (
        <section className="container_form">
            <form onSubmit={aoSalvar}>
                <p>Preencha os dados para criar o card do colaborador.</p>
                <Forms
                     obrigatorio={true}
                     label="Nome"
                     placeholder="Digite o seu nome"
                     valor={nome}
                     aoAlterado={valor => setNome(valor)}
                />
                <Forms
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Forms
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={img}
                    aoAlterado={valor => setImg(valor)}
                />
                <Listas 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Button texto="Criar Card" />
            </form>
        </section>
    )

}

export default Formulario