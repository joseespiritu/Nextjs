import styles from '../../styles/Users.module.css';

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { users: data }
    }
}

const Users = ({ users }) => {
    return (
        <div>
            <h1>All Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <a className={styles.single}>
                        <h3>{ user.name }</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default Users;