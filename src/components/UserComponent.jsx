/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import useWithAuth from "./useWithAuth"

const UserComponent = (props) => {
    const [username, setUsername] = useState("")

    useEffect(()=>{
        setUsername(props.userTypeData.name || '-');
    }, [props.userTypeData.name])
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