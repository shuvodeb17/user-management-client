import './App.css'
import { useLoaderData, Link } from 'react-router-dom';
import AllUsers from './components/AllUsers/AllUsers';
import { useState } from 'react';

function App() {

  const loadData = useLoaderData();
  const [users, setUsers] = useState(loadData)

  return (
    <div>
      <div className="container mx-auto">

        <Link to='/add-user'>
          <button className="btn mb-5 mt-5">New User</button>
        </Link>

        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head*/}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  users.map(user => <AllUsers
                    key={user._id}
                    user={user}
                    users={users}
                    setUsers={setUsers}
                  ></AllUsers>)
                }
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </div>
  )
}

export default App
