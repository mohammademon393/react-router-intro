import { Link } from 'react-router';
import './User.css';

const User = ({user}) => {
    return (
        <div>
            <div className='card'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <Link to={`/users/${user.id}`}>Show details</Link>
            </div>
        </div>
    );
};

export default User;