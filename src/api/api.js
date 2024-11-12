const APIURL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

export const getBooks = async () => {
  const response = await fetch(`${APIURL}/books`);
  if (!response.ok) {
    throw new Error('Error fetching books');
  }
  const booksJson = await response.json();
  return booksJson.books;
};

export const getBookDetails = async (bookId) => {
  const response = await fetch(`${APIURL}/books/${bookId}`);
  if (!response.ok) {
    throw new Error('Error fetching book details');
  }
  const idJson = await response.json();
  return idJson;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${APIURL}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Error registering user');
  }
  const registerJson = await response.json();
  return registerJson;
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${APIURL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error('Error logging in');
  }
  const loginJson = await response.json();
  return loginJson;
};

export const getUserDetails = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${APIURL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Error fetching user details');
  }
  return await response.json();
};

export const checkoutBook = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${APIURL}/books/${id}/checkout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Error checking out book');
  }
  return await response.json();
};

export const returnBook = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${APIURL}/books/${id}/return`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Error returning book');
  }
  return await response.json();
};
