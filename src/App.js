import React, { Component } from 'react';


//Componenete creado
import Navigation from './components/Navigation';

//Datos en formato JSON (simulando la respuesta de un servidor)
import { tareas } from './tareas.json';
console.log(tareas);

class App extends Component {
  constructor() {
    super();
    this.state = {
      titulo: 'Aplicacion de tareas',
      //la variable guarda los datos del JSON
      ListaTareas: tareas
    }
  }

  render() {
    console.log('Antes de rederizar el componente');
    console.log(this.state.ListaTareas);

    const tareas_const = this.state.ListaTareas.map( (tarea, index)  =>{
      return(
        <div className="col-md-4 mt-4">
          <div className="card">
            <div className="card-header">
              <span className="badge badge-danger float-right">
                {tarea.prioridad}
              </span>
              <h3 > {tarea.titulo} </h3>                
            </div>
            <div>
              <p className="list-group-item">{tarea.responsable}</p>
              <p className="list-group-item">{tarea.descripcion}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation titulo={ this.state.titulo } ntareas={ this.state.ListaTareas.length }/>
        
        <div className="container">
          <div className="row ">
            {tareas_const}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
