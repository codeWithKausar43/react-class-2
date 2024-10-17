import { useEffect, useState } from "react"
import Friend from "./Friend"
export default function Friends(){
    const [friend, setFriend] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
               <h2>Friends: {friend.length}</h2>
               {
                friend.map(friend => <Friend friend={friend}></Friend>)
               }
        </div>
    )
}