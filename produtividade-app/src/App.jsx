import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AtividadeForm from './assets/components/AtividadeForm';
import AtividadeLista from './assets/components/AtividadeLista';

function App() {
  const [index, setIndex] = useState(0)
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({ id: 0 })

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) :
      setIndex(Math.max.apply
        (Math,
          atividades.map((item) => item.id))
        + 1)
  }, [atividades])


  const addAtividade = (ativ) => {
    setAtividades([...atividades, { ...ativ, id: index }]);
  }

  const cancelarAtividade = () => {
    setAtividade({ id: 0 })
  }

  const atualizarAtividade = (ativ) => {
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item))
    setAtividade({ id: 0 })
  }

  const deletarAtividade = (id) => {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  const pegarAtividade = (id) => {
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividade[0])
  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        cancelarAtividade={cancelarAtividade}
        atualizarAtividade={atualizarAtividade}
        ativSelecionada={atividade}
        atividades={atividades}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>
  )
}

export default App
