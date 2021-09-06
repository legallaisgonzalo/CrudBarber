import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';


const EditUserForm = (props) => {



    const {register, errors, handleSubmit,setValue} = useForm({
        defaultValues:props.currentUser
    
        
    });
       setValue('name',props.currentUser.name);
       setValue('username',props.currentUser.username);

    const onSubmit = (data, e) => {
            console.log(data)

            props.updateUser(props.currentUser.id,data)

            //limpia  el form
            e.target.reset()

        }

return (  

    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label>

                <input
                       name='name'
                       className='my-2 form-control'
                       placeholder='Completa tu nombre'
                       autoComplete="off"
                       {...register('name', { required: "requerido", })}
                  />
               
                    <div>
                        {errors?.usuario?.message}
                    </div>

                <label>Horario</label>
                
                <input
                        type='time'
                       name='name'
                       className='my-2 form-control'
                       placeholder='Completa tu nombre'
                       autoComplete="off"
                       {...register('username', { required: "requerido", })}
                />
               
                    <div>
                        {errors?.usuario?.message}
                    </div>

                <button type="submit" className="btn btn-primary">
                    Agregar turno
                </button>
            </form>

    </Fragment>
  );
}
  export default EditUserForm