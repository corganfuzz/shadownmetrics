import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    website: string;
    company: {
        name: string;
    }
}

export const Stacker = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h2 cds-text="section">Users Table (API Data)</h2>
            {loading ? (
                <div className="spinner spinner-md">Loading users...</div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th className="left">Name</th>
                            <th className="left">Email</th>
                            <th className="left">Website</th>
                            <th className="left">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="left">{user.name}</td>
                                <td className="left">{user.email}</td>
                                <td className="left">{user.website}</td>
                                <td className="left">{user.company.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};