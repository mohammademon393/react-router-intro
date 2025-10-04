import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';
import './Users.css';

const Users = () => {
    const users = useLoaderData();
    // console.log(users);

    
    return (
      <div>
        {/* <h2>This is users</h2> */}

        <div className="card-container">
          {users.map((user) => (
            <User user={user} key={user.id}></User>
          ))}
        </div>
      </div>
    );
};

export default Users;