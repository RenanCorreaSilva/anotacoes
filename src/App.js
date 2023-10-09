import './App.css';
import {useState, useEffect} from 'react'


function App() {

  const [tarefas, setarTarefas] = useState([])
  const [modal, setModal] = useState(false)


  const SalvarTarefa = () => {

    var tarefa = document.getElementById('content-tarefa')
    
    setarTarefas([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada:false

      }
    ])

    window.localStorage.setItem('tarefas',JSON.stringify([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada:false

      }
    ]));

    setModal(false);

  }

  const AbrirModal = () => {
      setModal(!modal)
  }

  const fecharModal = () => {
    setModal(false)
  }

  const marcarConcluida = (id, opt) =>{
    let novasTarefas = tarefas.filter(function(val){
      if(val.id == id){
        val.finalizada = opt;
      }

      return val;

    })

    setarTarefas(novasTarefas)
    window.localStorage.setItem('tarefas',JSON.stringify(novasTarefas));
  }

  const deletarTarefa = (id)=>{
    let novasTarefas = tarefas.filter(function(val){
      if(val.id != id){
        return val;
      }
    })
    setarTarefas(novasTarefas)
    window.localStorage.setItem('tarefas',JSON.stringify(novasTarefas));
  }

  useEffect(()=>{
   if(window.localStorage.getItem('tarefas') != undefined){
      setarTarefas(JSON.parse(window.localStorage.getItem('tarefas')));
        console.log(window.localStorage.getItem('tarefas'));
  }
  },[])

  

  return (
    <div className="App">
      {
        modal?
        <div className='modal'>
          <div className='modalContent'>
            <p onClick={()=>fecharModal()}>X</p>
            <h3>Adicionar sua tarefa</h3>
            <input id='content-tarefa' type="text" / >
            <button onClick={()=>SalvarTarefa()}>Salvar</button>
          </div>
        </div>
        :
        <div></div>
      }
      <div onClick={()=>AbrirModal()} className='addTarefa'>+</div>
      <div className='boxTarefas'>
        <h2>Minhas Tarefas do dia</h2>
        {
          tarefas.map((val)=>{
              if(!val.finalizada){
                return(
                  <div className='tarefaSingle'>
                    <p onClick={()=>marcarConcluida(val.id,true)}>{val.tarefa}</p>
                    <span onClick={()=>deletarTarefa(val.id)} style={{color:'red'}}>(X)</span>

                  </div>
                )
              }else{
                return(
                  <div className='tarefaSingle'>
                    <p onClick={()=>marcarConcluida(val.id,false)} style={{textDecoration:'line-through'}}>{val.tarefa}</p>
                    <span onClick={()=>deletarTarefa(val.id)} style={{color:'red'}}>(X)</span>
                  </div>
                  
                )
              }
            })
        }
      </div>
    </div>
  );
}

export default App;
