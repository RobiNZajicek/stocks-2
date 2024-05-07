import './Profile.css'
import  { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8080/user/${id}`);
  //   loadUsers();
  // };

  return (
    <div className="Profile">

      {users.map((user,index)=>(
          <div key={index}>
          <h1>{user.first_name}</h1>
          <h1>{user.last_name}</h1>
          <h1>{user.email}</h1>
          <h1>{user.money}</h1>
          <h1>{user.userName}</h1>
          <h1>{user.birthDate}</h1>
          </div>

      ))}

    </div>
  )
}

export default Profile