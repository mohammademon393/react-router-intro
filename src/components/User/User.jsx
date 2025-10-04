import './User.css';

const User = ({user}) => {
    return (
        <div>
            <div className='card'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
        </div>
    );
};

export default User;