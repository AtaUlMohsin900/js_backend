
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([])

  // useEffect has one callback and one dependency array.
  useEffect(() => {
    axios.get('/api/books')
      .then((response) => {
        setBooks(response.data)

      })
      .catch((error) => {
        console.log(error);

      })
  })

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
