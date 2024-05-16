import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import axiosInstance from '../Utils/axios';





export const authContext = createContext(null);
export const ThemeContext = createContext(null);


const MyProviders = ({children}) => {

    const [userToken,setToken] = useState(null);


    useEffect(() => {
        const fetchToken = async () => {
          try {
            const tokenFromStorage = sessionStorage.getItem('userToken');
            setToken(tokenFromStorage);
    
            if (!tokenFromStorage) {

              return;

            } else {
            
              const response = await axiosInstance.post('/users/verify', null, {
                headers: {
                  'Authorization': `Bearer ${tokenFromStorage}`,
                },
              });
            }
          } catch (error) {
            console.error(error);
            sessionStorage.removeItem('userToken');
            setToken(null);
          }
        };
    
        fetchToken();
      }, []);
      


    



    const saveToken = (token) => {
        sessionStorage.setItem('userToken', token);
        setToken(token);
      };
    
      const removeToken = () => {
        sessionStorage.removeItem('userToken');
        setToken(null);
      };


  return (
    <authContext.Provider value ={{
        userToken,
        saveToken,
        removeToken,
    }}>
        {children}
    </authContext.Provider>
  )
}

export default MyProviders














