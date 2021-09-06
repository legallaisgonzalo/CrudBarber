import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form';


const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();
       
    const onSubmit = (data, e) => {
            //console.log(data)
            props.addUser(data)
            //limpia  el form
            e.target.reset()
        }

return (  

    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label>Cliente</label>

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

                <button type="submit" className="btn btn-succes">
                    Agregar Usuario
                </button>
            </form>

    </Fragment>
  );
}
  export default AddUserForm