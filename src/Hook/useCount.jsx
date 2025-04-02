import React from 'react'
import useBookContext from '../contexts/BookContext '

const useCount = () => {
    const { allBooks } = useBookContext()

    const totalBooks = allBooks.length

    const totalReadBooks = allBooks.filter((book) => book.status).length

    const totalUnreadBooks = allBooks.filter((book) => !book.status).length

    return { totalBooks, totalReadBooks, totalUnreadBooks }
}

export default useCount
