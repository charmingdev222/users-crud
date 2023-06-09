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

                <h3 className='text-2xl font-bold text-secondary-color'>{isUserIdToEdit ? "Update user" : "New user"}</h3>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="first_name">Name <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='first_name' type="text" {...register("first_name", { 
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "You have exceeded the maximum characters allowed"
                        }, minLength: {
                            value: 2,
                            message: "You must enter more than one character"
                        } })} />
                    <span className='text-primary-color text-xs'>
                        {errors.first_name && errors.first_name.message}
                    </span>
                </div>
                
                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="last_name">Last name<span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='last_name' type="text" {...register("last_name", { 
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "You have exceeded the maximum characters allowed"
                        }, minLength: {
                            value: 2,
                            message: "You must enter more than one character"
                        }})} />
                    <span className='text-primary-color text-xs'>
                        {errors.last_name && errors.last_name.message}
                    </span>
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="email">Email <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='email' type="email" {...register("email", { 
                        required: "This field is required", maxLength: {
                            value: 150,
                            message: "You have exceeded the maximum characters allowed"
                        }, minLength: {
                            value: 2,
                            message: "You must enter more than one character"
                        } })} />
                        <span className='text-primary-color text-xs'>
                            {errors.email && errors.email.message}
                        </span>
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="password">Password <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='password' type="password" {...register("password", { 
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "You have exceeded the maximum characters allowed"
                        }, minLength: {
                            value: 8,
                            message: "You must enter at least 8 characters"
                        } })} />
                    <span className='text-primary-color text-xs'>
                        {errors.password && errors.password.message}
                    </span>
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="birthday">Birthday</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='birthday' type="date" {...register("birthday")} />
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="image_url">Image url</label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color placeholder:text-xs' id='image_url' type="text" placeholder='Formatos: jpg, jpeg, gif o png' {...register("image_url", {
                        pattern: {
                            value: /(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                            message: "The URL format for images is invalid"
                        }
                    })} />
                    <span className='text-primary-color text-xs'>{errors.image_url && errors.image_url.message}</span>
                </div>

                <i onClick={handleClickCloseModal} className='bx bx-x absolute right-2 top-1 text-2xl hover:text-primary-color cursor-pointer'></i>

                <button className='bg-primary-color text-white p-2 text-sm border-2 border-transparent hover:text-[0.9rem] hover:border-secondary-color transition-colors rounded-md sm:max-w-max sm:mx-auto sm:px-8'>{isUserIdToEdit ? "Save changes" : "Add new user"}</button>
            </form>
        
        </section>
    )
}

export default Modal
