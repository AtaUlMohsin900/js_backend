
import { useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  return (
    <>
      <h1>Backend Course</h1>
      <p>BOOKS:{books.length}</p>
      {
        books.map((book, index) => {
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.auther}</p>
          </div>
        })
      }
    </>
  )
}

export default App
