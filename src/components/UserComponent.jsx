/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import useWithAuth from "./useWithAuth"
import { MyContext } from "../App";

const UserComponent = (props) => {
    const [username, setUsername] = useState("")
    const {name} = useContext(MyContext);

    useEffect(()=>{
        setUsername(name);
    }, [])
  return (
    <div>
        <h1>{username}</h1>   
        <p>{props.age}</p> 
        <button onClick={()=>{
            setUsername("kavi")
        }}>Change Name</button>
    </div>
  )
}

const UserComp = useWithAuth(UserComponent);
export default UserComp;