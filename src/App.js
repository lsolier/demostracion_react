import React, { Component } from 'react';


//Componenete creado
import Navigation from './components/Navigation';
import FormularioTarea from './components/FormularioTarea';

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
    };
    this.handleAddTarea = this.handleAddTarea.bind(this);
    //this.handleRemoveTarea = this.handleRemoveTarea.bind(this);
  }

  handleAddTarea(tarea){
    this.setState({
      ListaTareas: [...this.state.ListaTareas,tarea]
    })
  }

  handleRemoveTarea(index){
    //alert(index);
    console.log(index);
    if (window.confirm('Estas seguro de eliminarlo?')) {
      this.setState({
        ListaTareas: this.state.ListaTareas.filter( (e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    console.log('Antes de rederizar el componente');
    console.log(this.state.ListaTareas);

    const tareas_const = this.state.ListaTareas.map( (tarea, i)  =>{
      return(
        <div className="col-md-4 mt-4" key={i}>
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
            <div className="card-footer">
              <button 
                className="btn btn-danger"
                onClick={this.handleRemoveTarea.bind(this,i)}
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      )
    })

    //Return del componente
    return (
      <div className="App">
        <Navigation titulo={ this.state.titulo } ntareas={ this.state.ListaTareas.length }/>        
        <div className="container-fluid" >
          <div className="row">
            <div className="col-md-3 mt-4">
              <FormularioTarea onAddTarea={this.handleAddTarea}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {tareas_const} 
              </div>            
            </div>                        
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
