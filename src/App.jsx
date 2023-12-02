import React, { useState } from "react"
import Banner from "./components/Banner/banner"
import Formulario from "./components/Forms/formulario"
import Button from "./components/Forms/Botao/button"
import Time from "./components/Time/time"
import Footer from "./components/Footer/footer"

function App(props) {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]

  const [membros, setMembros] = useState([])

  const userCadastradoAdded = (membro) => {
    setMembros([...membros, membro])

  }

  return (
    <>
      <Banner />
      <Formulario times={times.map(time => time.nome)} userCadastrado={membro => userCadastradoAdded(membro)} />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        membros={membros.filter(membro => membro.time == time.nome)}
      />)}
      <Footer logos={props.logos} />
    </>
  )
}

export default App
