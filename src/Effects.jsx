import { useEffect, useState } from "react";

export default function Effects(){
    const [user,setUser] = useState([])
    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json(res))
        .then(data => setUser(data))
    },[])
    return(
        <div>
            <h4>users: {user.length}</h4>
            
        </div>
    )
}