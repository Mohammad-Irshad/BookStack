import React from 'react'
import useBookContext from '../contexts/BookContext '
import { useState } from 'react'
import useCount from '../Hook/useCount'

const Allbooks = () => {
    const { allBooks, readToggler, deleteBook } = useBookContext()
    const { totalBooks, totalReadBooks, totalUnreadBooks } = useCount()
    const [filter, setFilter] = useState("all")

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    const filteredBooks = filter === "all" ? allBooks : allBooks.filter((book) => (filter === "read" ? book.status : !book.status))

    return (
        <div>
            <h3>All books are</h3>
            <hr />
            <label>Filter: </label>
            <input type='radio' name="allBooks" value="all" checked={filter === "all"} onChange={handleFilter} /> All Books({totalBooks})
            <input type='radio' name="allBooks" value="read" checked={filter === "read"} onChange={handleFilter} /> Read Books({totalReadBooks})
            <input type='radio' name="allBooks" value="unread" checked={filter === "unread"} onChange={handleFilter} /> Unread Books({totalUnreadBooks})

            {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                    <li key={book.title} className="book-item">
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                        <span className={book.status ? "read" : "unread"}>
                            {book.status ? "Readed" : "Yet to read"}
                        </span>
                        <button className="toggle-btn" onClick={() => readToggler(book.title)}>
                            {book.status ? "Mark as Unread" : "Mark as Read"}
                        </button>
                        <button className="delete-btn" onClick={() => deleteBook(book.title)}>Delete</button>
                    </li>
                ))
            ) : (
                <p>No books added, add some.</p>
            )}
        </div>
    )
}

export default Allbooks
