import React, { useState } from 'react'
import UserTable from './components/UserTable.jsx'
import {v4 as uuidv4} from 'uuid'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm.jsx'



const App = () => {
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData);


  //add user 
  const AddUser = (user) => {
    user.id = uuidv4()
    setUsers([...users,
    user])
  }

  //delete user 
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  //editar user
  const [editing, setEditing] = useState(false);
  //const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });


  const editRow = (user) => {
    setEditing(true); 
    setCurrentUser({ 
      id: user.id, name: user.name, username: user.username })
    }
  const updateUser = (id,updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id===id? updateUser: user)))
  }
       
  
  return (
    
    <div className="container">

      <h1>Aplicación CRUD con React Hook</h1>
        <div className="flex-row">
          <div className="flex-large"> 
           {   
              editing ? (
              <div>
                <h2>Editar Turno</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}/>
              </div> 
              ) : (

              <div>
                <h2>Agregar Turno</h2>
                <AddUserForm 
                  addUser = {AddUser} />
              </div>  
              )       
            } 
            </div>
        
              <div className="flex-large">
                <h2>Ver Turnos</h2>
              <UserTable 
              users={users}
              deleteUser={deleteUser} 
              editRow={editRow}/>
              </div>
      </div>
    </div>
  )
}
 


export default App