import React from 'react';


class formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            nombre: "",
            email: "", 
            sexo: "", 
            foto: "", 
            descripcion: "",
        };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeSexo =  this.handleChangeSexo.bind(this); 
      this.handleChangeFoto =  this.handleChangeFoto.bind(this); 
      this.handleChangeDescripcion =  this.handleChangeDescripcion.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({nombre: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Usuario añadido: ' + this.state.nombre);
      event.preventDefault();
      this.props.addUser(this.state);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeSexo(event) {
        this.setState({sexo: event.target.value});
    }

    handleChangeFoto(event) {
        this.setState({foto: event.target.value});
        
        
    }
    handleChangeDescripcion(event) {
        this.setState({descripcion: event.target.value});
    }

  
    render() {
      return (

        
        <form className="formu" onSubmit={this.handleSubmit}>
          <div className="caja">
          <label className="nombres">
            <span >Nombre: </span>        
            <input type="text" value={this.state.nombre} onChange={this.handleChange} />
            
          </label>
          <br/>
          <label className="nombres">
            <span>Email: </span>
            <input type="email" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <br/>
          <label className="nombres">
          <span>Sexo: </span>
            <select value={this.state.sexo} onChange={this.handleChangeSexo}>
                
                <option value="">Seleccione una opcion</option>  
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="helicoptero apache">Helicoptero apache</option>
                
            </select>
          </label>
          <br/>
          <label className="nombres">
          <span>Foto: </span>
            <input type="file" value={this.state.foto} onChange={this.handleChangeFoto} />
          </label>
          <br/>
          <label className="nombres">
          Descripcion: <br/>
          <textarea value={this.state.descripcion} onChange={this.handleChangeDescripcion}></textarea>
          </label>
          <br/><br/>
            <input className="boton" type="submit" value="añadir" />
            </div>
        </form>
        
      );
    }
  }

  export default formulario;