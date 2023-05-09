import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateUser = () => {

    const user = useLoaderData()
    const { _id, name, email, gender, status, } = user;

    const updateHandler = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const gender = e.target.gender.value;
        const status = e.target.status.value;
        const updatedUser = { name, email, gender, status }
        console.log(updatedUser);

        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('User updated successful')
                }
            })
    }



    return (
        <div>
            <div className="container mx-auto">
                <h1 className='text-3xl text-center font-bold'>Update User</h1>
                <p className='text-center mb-5'>Use to form below to Update your account</p>

                <Link to='/'>
                    <button className="btn">Back</button>
                </Link>

                <form onSubmit={updateHandler} >
                    <div className='flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={name} type="text" placeholder="Name" name='name' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={email} type="text" placeholder="Email" name='email' className="w-full input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={gender} type="text" placeholder="Male OR Female" name='gender' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={status} type="text" placeholder="Active OR Inactive" name='status' className="input input-bordered" />
                            </label>
                        </div>

                    </div>
                    <button className='btn btn-block mt-5'>Update</button>
                </form>

            </div>
        </div>
    );
};

export default UpdateUser;