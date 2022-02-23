import React from 'react';

function ListaUsuarios(props) {
    
    
    return (
    <>
    {props.listUsers.map((user) => {
        return (
            <div className="container">
                    <div>
                        <div className="tresElements">
                        <div className="nombre">
                        {user.nombre}
                        </div>
                        
                        <div className="email">
                        {user.email}
                        </div>
                        

                        <div className="sexo">
                        {user.sexo}
                        </div>
                        </div>
                        <br/>
                        

                        <div className="foto">
                        {user.foto}
                        </div>
                        <br/>

                        <div clasName="descripcion">
                        {user.descripcion}
                        </div>
         
                    </div>

                </div>
        )
    })}    
    </>
    );
}

export default ListaUsuarios;



