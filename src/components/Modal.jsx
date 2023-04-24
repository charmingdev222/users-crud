import React from 'react'

const Modal = ({ isShowedForm, setIsShowedForm, register, handleSubmit, submit, reset, setIsUserIdToEdit, isUserIdToEdit, errors }) => {
    const handleClickCloseModal = () => {
        setIsShowedForm((isShowedForm) => !isShowedForm)
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
            image_url: ""
        })
        setIsUserIdToEdit()
    }
    


    return (
        <section className={`fixed top-0 left-0 bottom-0 right-0 bg-red flex bg-black/40 justify-center items-center transition-opacity z-20 ${isShowedForm ? "opacity-100 visible" : "opacity-0 invisible"}`}>

            <form onSubmit={handleSubmit(submit)} className='bg-white p-4 grid gap-4 rounded-md w-[300px] relative overflow-y-auto sm:w-[450px] sm:py-6 sm:px-8'>

                <h3 className='text-2xl font-bold text-secondary-color'>{isUserIdToEdit ? "Editar usuario" : "Nuevo usuario"}</h3>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="first_name">Nombres <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='first_name' type="text" {...register("first_name", { required: true, maxLength: 25, minLength: 1 })} />
                    
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="last_name">Apellidos <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='last_name' type="text" {...register("last_name", { required: true, maxLength: 25, minLength: 1 })} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="email">Correo <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='email' type="email" {...register("email", { required: true, maxLength: 250, minLength: 1 })} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="password">Contraseña <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='password' type="password" {...register("password", { required: true, maxLength: 25, minLength: 1 })} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="birthday">Cumpleaños</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='birthday' type="date" {...register("birthday")} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="image_url">URL de la imagen</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1' id='image_url' type="text" {...register("image_url", {
                        pattern: {
                            value: /(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                            message: "El formato de URL para imágenes no es válido"
                        }
                    })} />
                    <span>{errors.image_url && errors.image_url.message}</span>
                </div>

                <i onClick={handleClickCloseModal} className='bx bx-x absolute right-2 top-1 text-2xl hover:text-primary-color cursor-pointer'></i>

                <button className='bg-primary-color text-white p-2 text-sm border-2 border-transparent hover:text-[0.9rem] hover:border-secondary-color transition-colors rounded-md sm:max-w-max sm:mx-auto sm:px-8'>{isUserIdToEdit ? "Guardar cambios" : "Agregar nuevo usuario"}</button>
            </form>
        
        </section>
    )
}

export default Modal
