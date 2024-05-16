import React, { useContext, useState } from 'react'
import axios from 'axios'
import { GrMail } from "react-icons/gr";
import {  useForm } from "react-hook-form";
import Input from './Input.jsx';
import axiosInstance from '../../Utils/axios.js'
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../MyProviders.jsx';
import { showSuccessAlert } from '../../Utils/toastifyAlert.js';

const NewBlog = () => {

const [showLink, setShowLink] = useState(false);
const {userToken} = useContext(authContext)

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        trigger,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate()
    
    
      const onSubmit = async (data) => {
          try {
            const formData = new FormData();
            // Append text data
            formData.append('title', data.title);
            formData.append('subtitle', data.subtitle);
            formData.append('description', data.description);
            // Append image file
            formData.append('image', data.image[0]);
      

            const token = sessionStorage.getItem('userToken')  

            if (userToken) {
              
              const response = await axiosInstance.post('/posts', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data', 
                  'Authorization': `Bearer ${userToken}`,
                },
              });
              
              showSuccessAlert('New Blog added')
              setShowLink(true)
              reset()
              
            } else {
              console.log('unautherized');
              navigate('/login')
            }

         
          } catch (error) {
              console.error(error);
          }
      } ;

     
    
      const inputFields = [
        {
            label: 'image',
            type: "file",
            name: 'image',
            id: 'image',
            placeholder: "Choose an image..",
            validation: {
              required: 'Image is required' ,
            }
          },
        {
          label:  'title',
          type: 'text',
          id:  'title',
          placeholder: "type your full title...",
          validation: {
            required: 'This field is required' ,
          }
        },
        {
          label: 'subtitle',
          type: "text",
          id: 'subtitle',
          placeholder: "type your full subtitle...",
          validation: {
            required: 'This field is required' ,
          }
        },
        {
          label: 'description',
          type: "textarea",
          rows: 10 ,
          id: 'description',
          placeholder: "type your description...",
          validation: {
            required: 'This field is required' ,
          }
        },
    
      ]
  return (
    <div className="flex justify-center items-center" >
    <form className="bg-white rounded-xl shadow-xl p-8 w-4/5 md:w-2/5 m-5 " onSubmit={handleSubmit(onSubmit)}>
     
      <h2 className="text-xl text-center p-4 font-normal">Add a new post</h2>
     
      <div className="grid gap-5">
          {inputFields.map((field, index) => (
              <Input
                key={field.id}
                label={field.label}
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                name={field.name}
                rows={field.rows}
                register={register(field.id, field.validation)}
                errors={errors}
                setValue={setValue}
                trigger={trigger}
                validation={field.validation} 
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
      {showLink && (
          <div className=" text-center pt-5">
            Visit
            <Link href="/blogs" className="ml-2 text-blue-500">
              Blogs 
            </Link>
            <span> to see your new posts</span>
          </div>
        )}
    </form>
  </div>
  )
}

export default NewBlog