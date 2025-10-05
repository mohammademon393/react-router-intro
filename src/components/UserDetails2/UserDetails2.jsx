import React, { use } from 'react';

const UserDetails2 = ({ usersPromise }) => {
    const user = use(usersPromise);
    // console.log(user);
    
  return (
    <div>
      <p>{user.name}</p>
      <small>{user.username}</small>
    </div>
  );
};

export default UserDetails2;