import React, {useState, useEffect, useContext} from 'react';
import { getAllUsers } from '../http/userApi';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import UserItem from './UserItem';

const UserList = () => {
    const {user} = useContext(Context)
    const [userList, setUserList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getAllUsers().then(res => setUserList(res))
    }, [])

    return (
    <Table striped bordered hover className='mt-4'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Роль</th>
          <th>Удаление</th>
        </tr>
      </thead>
      <tbody>
        {
            userList.length > 0 && userList.map(userItem => 
            <UserItem key={userItem.id} userItem={userItem}/>)
        }
      </tbody>
    </Table>
    );
};

export default UserList;