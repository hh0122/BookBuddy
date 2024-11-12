import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails, checkoutBook } from "../api/api";

const BookDetails = ({ isAuthenticated }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetails(id);
        setBook(response.book);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleCheckout = async () => {
    try {
      await checkoutBook(id);
      // Optionally: update the UI state to reflect the book being checked out
      window.location.reload(); // Reload to reflect the changes
    } catch (error) {
      console.error('Error checking out book:', error);
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-details-container">
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <img src={book.coverimage} alt={book.title} />
      {isAuthenticated && !book.isCheckedOut && (
        <button onClick={handleCheckout}>Check Out</button>
      )}
    </div>
  );
};

export default BookDetails;
