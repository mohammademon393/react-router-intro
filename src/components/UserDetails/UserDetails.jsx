import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
      <div className='userCard'>
        {/* <h2>User Details here</h2> */}
        <h3>{name}</h3>
        <p>{website}</p>
      </div>
    );
};

export default UserDetails;