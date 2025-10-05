import { Link, Navigate } from 'react-router';
import './User.css';
import { Suspense, useState } from 'react';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false);
    const [visiteHome, setVisiteHome] = useState(false);
    const usersPromise = fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`
    ).then((res) => res.json());

    if (visiteHome) {
        return <Navigate to={'/'}></Navigate>
    }

    return (
      <div>
        <div className="card">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <Link to={`/users/${user.id}`}>Show details</Link>
          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "Hind" : "Show"}
          </button>

          {showInfo && (
            <Suspense fallback={<span>Lodding...</span>}>
              <UserDetails2 usersPromise={usersPromise}></UserDetails2>
            </Suspense>
          )}
          <button onClick={()=> setVisiteHome(true)}>Visited Home</button>
        </div>
      </div>
    );
};

export default User;