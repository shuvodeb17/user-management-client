import React from 'react';
import {Link} from 'react-router-dom';

const AllUsers = ({ user }) => {
    const { _id, name, email, gender, status } = user;
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
                <button className='btn btn-secondary ms-5'>Delete</button>
            </td>
        </tr>
    );
};

export default AllUsers;