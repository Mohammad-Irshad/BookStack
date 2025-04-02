import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddBook from "./pages/Addbook"
import Allbooks from "./pages/Allbooks"
import Nav from "./components/Nav"
import { BooksProvider } from "./contexts/BookContext "
import './App.css'

function App() {

  return (
    <div className='app'>
      <BooksProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Allbooks />} />
            <Route path="/addBook" element={<AddBook />} />
          </Routes>
        </Router>
      </BooksProvider>
    </div>
  )
}

export default App
