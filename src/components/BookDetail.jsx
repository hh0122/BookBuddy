// BookDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../api/api";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBookDetails(id);
      setBook(response.book);
    };
    fetchBook();
  }, [id]);

  return (
    <div className="book-details-container">
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <img src={book.coverimage} alt={book.title} />
    </div>
  );
};

export default BookDetails;
