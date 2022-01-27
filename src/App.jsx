import { useEffect, useState } from 'react'; 

import Header from '../components/Header';
import Formulario from '../components/Formulario';
import ListadoPacientes from '../components/ListadoPacientes';


function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
     const pacientesActualizado = pacientes.filter((pacienteState) => pacienteState.id !== id)
     
     setPacientes(pacientesActualizado);
  }

 

  useEffect(()=> {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);

    }      
    obtenerLS();
  }, []);

  useEffect(()=> {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  return (
    <div className='container mx-auto'>
      <Header         
      />
      <div className="mt-12 md:flex justify-around">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
