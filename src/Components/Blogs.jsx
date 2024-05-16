import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Utils/axios';
import Spinner from './Spinner';
import { showSuccessAlert } from '../../Utils/toastifyAlert';


const Blogs = () => {

    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect (()=>{
        const fetchData = async()=>{
            try {
                const posts = await axiosInstance('/posts')
                setPosts(posts.data)
                setLoading(false)
             
            } catch (error) {
                console.log(error);
                setLoading(false)

            }   
        }
        fetchData()
    },[])
  return (
    <div className="m-auto p-3 flex justify-center items-center">
      {loading ? ( 
        <Spinner />
      ) : (
        <div className="grid md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post._id}>
              <img
                key={post._id}
                src={import.meta.env.VITE_SERVER_URL + post.image}
                className="h-2/3 w-full object-cover"
                alt="img"
              />
              <div className="flex flex-col items-center">
                <p>{post.title}</p>
                <p>{post.subtitle}</p>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
  )
}

export default Blogs