import React from 'react';
import Formulario from './components/Formulario';
import ListaUsuarios from './components/Listusers';





class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.addUser = this.addUser.bind(this);
      }

      addUser(user){
          let usuarios = this.state.users;
          usuarios.push(user);
          this.setState(
              {users:usuarios
            })
           
      }

    render () {
    return (
    <>

    <Formulario alertar={this.setAlert} addUser={this.addUser}/>  
    <ListaUsuarios listUsers = {this.state.users}/>
    
    </>
    );
    }
}

export default App;