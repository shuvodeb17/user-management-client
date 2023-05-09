import React from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {

    const formHandler = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const gender = e.target.gender.value;
        const status = e.target.status.value;
        const newUser = { name, email, gender, status }
        console.log(newUser);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('User created successful')
                }
            })
    }


    return (
        <div>
            <div className="container mx-auto">
                <h1 className='text-3xl text-center font-bold'>New User</h1>
                <p className='text-center mb-5'>Use to form below to create a new account</p>

                <Link to='/'>
                    <button className="btn">Back</button>
                </Link>

                <form onSubmit={formHandler} >
                    <div className='flex gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Email" name='email' className="w-full input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Male OR Female" name='gender' className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Active OR Inactive" name='status' className="input input-bordered" />
                            </label>
                        </div>

                    </div>
                    <button className='btn btn-block mt-5'>Save</button>
                </form>

            </div>
        </div>
    );
};

export default AddUser;