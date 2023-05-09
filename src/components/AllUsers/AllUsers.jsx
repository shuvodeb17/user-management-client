import React from 'react';

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
                <button className='btn btn-primary'>Edit</button>
                <button className='btn btn-secondary ms-5'>Delete</button>
            </td>
        </tr>
    );
};

export default AllUsers;