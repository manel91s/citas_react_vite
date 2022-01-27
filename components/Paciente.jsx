const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const handleClick = (paciente) => {
         setPaciente(paciente);
    }

    const handleEliminar = () => {
       const respuestas = confirm('Seguro que quieres eliminar este paciente?');

       if(respuesta) {
          eliminarPaciente(paciente.id);
       }
    }

    return (  
        <div className="mt-3 bg-white shadow-md px-5 py-10 rounded-xl mt-10">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">{paciente.nombre}</span>    
                 </p>
                 <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">{paciente.propietario}</span>    
                 </p>
                 <p className="font-bold mb-3 text-gray-700 uppercase">Email {''}
                    <span className="font-normal normal-case">{paciente.email}</span>    
                 </p>
                 <p className="font-bold mb-3 text-gray-700 uppercase">Fecha {''}
                    <span className="font-normal normal-case">{paciente.fecha}</span>    
                 </p>
                 <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas{''}
                    <span className="font-normal normal-case">{paciente.sintomas}</span>    
                 </p>

                 <div className="flex justify-between mt-10">
                    <button 
                        className="py-2 px-10 editar bg-indigo-600 hover: bg-indigo-700 text-white font-bold uppercase rounded"
                        type="button"
                        onClick = {() => handleClick(paciente)}
                        >Editar</button>
                     <button 
                        className="eliminar py-2 px-10 bg-red-600 hover: bg-red-700 text-white font-bold uppercase rounded"
                        type="button"
                        onClick = {handleEliminar} 
                        
                     >Eliminar</button>
                 </div>
            </div>
    );
}
 
export default Paciente;