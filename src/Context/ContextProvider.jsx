import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { createContext } from "react";
export const mainContext = createContext(null)
const ContextProvider = ({children}) => {
    // const [state,setState]=useState([])
    const [data, setData] = useState([]);
    const getData = async () => {
      const res = await axios.get("http://localhost:8080/gallery");
      setData(res.data);
    };
    useEffect(() => {
      getData();
    }, []);
    const values = {
      data,setData,getData
    }

  return (
    <mainContext.Provider value={values}>
    {children}
   </mainContext.Provider>
  )
}

export default ContextProvider      