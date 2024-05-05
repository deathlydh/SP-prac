import React from 'react';
import {Button} from 'react-bootstrap'
import {uvolit} from "../http/userApi";
const UserItem = ({userItem}) => {
    const uvolitUser = async () => {
        await uvolit(userItem.id)
    }

    return (
    <tr>
        <td>{userItem.id}</td>
        <td>{userItem.email}</td>
        <td>{userItem.role}</td>
        <td ><Button className='me-auto ms-auto w-100' onClick={uvolitUser}>Удалить</Button></td>
      </tr>
    );
};

export default UserItem;