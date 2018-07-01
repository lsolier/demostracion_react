import React, {Component} from 'react';

class FormularioTarea extends Component{
    constructor(){
        super();
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'baja'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTarea(this.state);
        this.setState({
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'baja'
        });
        console.log('enviando datos ...');
        console.log(this.state);
    }

    handleInputChange(e){
        const {value,name} = e.target;
        console.log(value,name);
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="titulo" 
                            className="form-control"
                            value={this.state.titulo}
                            onChange={this.handleInputChange}
                            placeholder="Titulo"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="responsable"
                            className="form-control"
                            value={this.state.responsable}
                            onChange={this.handleInputChange} 
                            placeholder="Responsable"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="descripcion"
                            className="form-control"
                            value={this.state.descripcion}
                            onChange={this.handleInputChange}
                            placeholder="Descripcion"
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            name="prioridad" 
                            className="form-control"
                            value={this.state.prioridad}
                            onChange={this.handleInputChange}
                        >
                            <option>bajo</option>
                            <option>medio</option>
                            <option>alto</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}

export default FormularioTarea;