import {  useForm } from "react-hook-form";
import { useState } from "react";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";
import Input from "./Input";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
import { showFailureAlert, showSuccessAlert } from "../../Utils/toastifyAlert";
import axiosInstance from "../../Utils/axios";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = async (data) => {
      try {
        const response = await axiosInstance.post("users/signup",data)
        
        showSuccessAlert('Signed up successfully')
        navigate('/login');
      } catch (error) {
          console.error(error);
          showFailureAlert('Failed to sign up.Please try again')
      }
  } ;

  const inputFields = [
    {
      label: "Full Name",
      type: "text",
      id: "name",
      placeholder: "type your full name...",
      validation: {
        required: 'This field is required' ,
        minLength : {
            value: 3,
            message: 'Give a valid name'
        }
      }
    },
    {
      label: "User name",
      type: "text",
      id: "username",
      placeholder: "type a user name...",
      validation: {
        required: 'This field is required' ,
        minLength : {
            value: 3,
            message: 'Give a valid user name'
        }
      }
    },
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
        validate: value => {
            let errorMessage = '';
            errorMessage += /[a-z]/.test(value) ? '' : 'contain at least one lowercase letter, ';
            errorMessage += /[A-Z]/.test(value) ? '' : 'contain at least one uppercase letter, ';
            errorMessage += /\d/.test(value) ? '' : 'contain at least one digit, ';
            errorMessage += /[!@#$%^&*()_+]/.test(value) ? '' : 'and contain at least one special character, ';
            errorMessage = errorMessage.replace(/,\s*$/, ''); // Remove trailing comma and space
            return errorMessage && 'Password must ' + errorMessage || true; // Return true if no error message, indicating validation passed
        }
      }
    },
    {
      label: "Confirm Password",
      type: "password",
      id: "Cpassword",
      placeholder: "confirm your password...",
      validation: {
        required: 'Confirm your password',
        validate: (value) => value === watch('password') || "Passwords do not match",
      }
    }
  ];

  return (
  <div className="flex justify-center items-center" >
    <form className="bg-white rounded-xl shadow-xl p-8 w-4/5 md:w-2/5 m-5 " onSubmit={handleSubmit(onSubmit)}>
     
      <h1 className="text-2xl text-center font-semibold">Welcome</h1>
      <h2 className="text-xl text-center p-4 font-normal">Let's create your account!</h2>
     
      <div className="grid gap-5">
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
  );
};
