import {  useForm } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";
import Input from "./Input";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { showFailureAlert, showSuccessAlert } from "../../Utils/toastifyAlert";
import { useContext, useState } from "react";
import { authContext } from "../MyProviders";
import axiosInstance from "../../Utils/axios";


const Login = () => {


  const {saveToken} = useContext(authContext)


    const {
        register,
        handleSubmit,
        watch,
        setValue,
        trigger,
        formState: { errors },
      } = useForm();

const navigate =useNavigate()
    
    const inputFields = [
        {
          label: "Email",
          type: "text",
          id: "email",
          placeholder: "type your email...",
          validation: {
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            }
          }
        },
        {
          label: "Password",
          type: "password",
          id: "password",
          placeholder: "type your password...",
          validation: {
            required: 'This field is required',
          }
        },
    ]

    const onSubmit = async (data) => {
        try {
          const response = await axiosInstance.post("users/login",data)
            saveToken(response.data.token)
            showSuccessAlert('Logged in successfully')
            navigate('/')
        } catch (error) {
            console.error(error);
            if (error.response.data.message) {
               showFailureAlert(error.response.data.message)
            } else {
              showFailureAlert('Please try again')
            }
           
        }
    } ;

  return (
    <div className="flex justify-center items-center flex-1 my-10" >
        <form className="bg-white rounded-3xl ring-1 ring-slate-400  w-4/5 md:w-2/5 md:p- p-10 " onSubmit={handleSubmit(onSubmit)}>
        
        <h1 className="text-2xl text-center font-semibold">Welcome</h1>
        <h2 className="text-xl text-center p-4 font-normal">Login to your account!</h2>
        
        <div className="grid gap-10">
            {inputFields.map((field, index) => (
                <Input
                    key={field.id}
                    label={field.label}
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    register={register(field.id, field.validation)}
                    errors={errors}
                    setValue={setValue}
                    trigger={trigger}
                />
                ))}
        </div>
        <div className="mt-5 flex justify-center pt-2">
            <button
            type="submit"
            className="flex items-center gap-1 py-2 px-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
            >
            <GrMail />
            Submit
            </button>
        </div>
        </form>
  </div>
  )
}

export default Login