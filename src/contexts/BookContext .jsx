import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const BookContext = createContext()

const useBookContext = () => useContext(BookContext)

export default useBookContext

const Books = [{ title: "Rich dad poor dad", author: "Dale carnegi", status: false }]

export function BooksProvider({ children }) {
    const [allBooks, setAllBooks] = useState(() => {
        const bookData = localStorage.getItem("allBooks")
        return bookData !== null ? JSON.parse(bookData) : Books
    })

    function addBook(newBook) {
        const updatedData = [...allBooks, newBook]
        setAllBooks(updatedData)
        localStorage.setItem("allBooks", JSON.stringify(updatedData))
    }

    function readToggler(bookTitle) {
        const updatedData = allBooks.map((book) => book.title === bookTitle ? { ...book, status: !book.status } : book)
        setAllBooks(updatedData)
        localStorage.setItem("allBooks", JSON.stringify(updatedData))
    }

    function deleteBook(bookTitle) {
        const updatedData = allBooks.filter((book) => book.title != bookTitle)
        setAllBooks(updatedData)
        localStorage.setItem("allBooks", JSON.stringify(updatedData))
    }

    return (
        <BookContext.Provider value={{ allBooks, addBook, readToggler, deleteBook }}>
            {children}
        </BookContext.Provider>
    )
}