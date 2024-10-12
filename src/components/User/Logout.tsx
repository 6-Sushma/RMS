import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const navigate = useNavigate();
    useEffect( ()=>{
        sessionStorage.clear()

        navigate("/")
    },[])
  return (
    <div>Logout</div>
    
  )
}

export default Logout