import React, { use } from 'react';

const User2 = ({ userPromise }) => {
    const users = use(userPromise);
    console.log(users);
    
  return (
    <div>
      <h2>This is user-2</h2>
    </div>
  );
};

export default User2;