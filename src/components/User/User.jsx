import { Link } from 'react-router';
import './User.css';
import { Suspense, useState } from 'react';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false);
    const usersPromise = fetch(
      `https://jsonplaceholder.typicode.com/users/${user.id}`
    ).then((res) => res.json());

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
        </div>
      </div>
    );
};

export default User;