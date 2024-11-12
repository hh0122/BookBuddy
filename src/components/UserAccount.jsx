import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../api/api';

const UserAccount = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails();
        setUser(userDetails);
      } catch (err) {
        console.error('Error fetching user details:', err);
        setError('Failed to load user details');
      }
    };

    fetchUserDetails();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="account-container">
        <h2>Account Details</h2>
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <h3>Books Currently Checked Out:</h3>
        <ul>
          {user.checkedOutBooks ? (
            user.checkedOutBooks.map(book => (
              <li key={book.id}>
                {book.title}
                <button onClick={() => handleReturnBook(book.id)}>Return</button>
              </li>
            ))
          ) : (
            <p>No books checked out.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserAccount;
