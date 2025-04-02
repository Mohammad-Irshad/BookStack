import React from 'react'
import { useState } from 'react'
import useBookContext from '../contexts/BookContext '

const AddBook = () => {

    const [newBookData, setNewBookData] = useState({ title: '', author: '', status: false })

    const { addBook } = useBookContext()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(newBookData)
        addBook(newBookData)
    }

    function handleStatus(e) {
        setNewBookData({ ...newBookData, status: e.target.value === "true" })
    }


    return (
        <div>
            <h4>Add a book</h4>
            <form onSubmit={submitHandler}>
                <label>Title: </label><br />
                <input type='text' placeholder='Enter book title' onChange={(e) => setNewBookData({ ...newBookData, title: e.target.value })} /><br />
                <label>Author: </label><br />
                <input type='text' placeholder='Enter book author' onChange={(e) => setNewBookData({ ...newBookData, author: e.target.value })} /><br />
                <label>Status: </label>
                <input type='radio' name="status" value="true" checked={newBookData.status === true} onChange={handleStatus} /> Read
                <input type='radio' name="status" value="false" checked={newBookData.status === false} onChange={handleStatus} /> Unread
                <br />
                <button>Add Book</button>
            </form>
        </div>
    )
}

export default AddBook
