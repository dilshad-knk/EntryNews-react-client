
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export const showSuccessAlert = (message) => {

    toast(message, {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            background: "green",
            color: "white",
        },
       
        
        
        });


}



export const showFailureAlert = (message) => {

    toast(message, {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            background: "red",
            color: "white",
        },
       
        });


}
