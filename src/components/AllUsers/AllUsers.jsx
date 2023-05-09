import React from 'react';
import { Link } from 'react-router-dom';

const AllUsers = ({ user, users, setUsers }) => {
    const { _id, name, email, gender, status } = user;

    console.log(users);

    const deleteHandler = id => {
        console.log(id);
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = users.filter(singleUser => singleUser._id !== _id)
                setUsers(remaining)
            })
    }

    return (
        <tr>
            <th>{_id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td>
                <Link to={`/update-user/${_id}`}>
                    <button className='btn btn-primary'>Edit</button>
                </Link>
                <button className='btn btn-secondary ms-5' onClick={() => deleteHandler(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default AllUsers;