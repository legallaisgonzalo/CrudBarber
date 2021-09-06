import React from 'react';




const UserTable = (props) => {

    console.log(props.users)

return   (  
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
                  {
                  props.users.length > 0 ? (
                    props.users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                          <button className ="button muted-button"
                                  onClick = { 
                                    () => {props.editRow(user)} 
                            }
                          >
                           Editar Usuario
                          </button>
                          
                          <button class="button btn-acces" 
                                  onClick={() => props.deleteUser(user.id)}>
                            Eliminar Usuario
                          </button>
                        </td>
                      </tr>
                    ))) : (

                  <tr>
                    <td colSpan={3}>No users</td>
                  </tr>
                )
              }
      </tbody>
    </table>
  );
}
  export default UserTable