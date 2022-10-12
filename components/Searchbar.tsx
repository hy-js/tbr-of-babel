import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"
import styled, { keyframes } from "styled-components"

import Image from "next/image"
import { OLBOOK } from "../lib/types"

// Context
import { useContext } from "react"
import CartContext from "../context/cart/CartContext"
import Link from "next/link"

interface Books {
  books: {
    id: string
    ISBN: string
    OLkey: string
    status: string

    title: string
    author: string

    cover: string
    publishedYear: string
    pages: string
  }[]
}

const Searchbar = () => {
  // Search
  const [books, setBooks] = useState<OLBOOK[]>([])
  const [search, setSearch] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const debouncedSearch = useDebounce(search, 500)
  useEffect(() => {
    async function fetchData() {
      setLoading(true)

      setBooks([])

      const data = await fetch(
        `https://openlibrary.org/search.json?q=${debouncedSearch}&limit=20&language=eng`
      ).then((res) => res.json())
      setBooks(data.docs)
      setLoading(false)
    }

    if (debouncedSearch) {
      // clear books array and search

      fetchData()
    }
  }, [debouncedSearch])

  // Add to Shelf
  const [shelf, setShelf] = useState<OLBOOK[]>([])

  // const handleAdd = (key: string) => {
  //   console.log(key)
  //   // Move from books to shelf
  //   const book = books.find((book) => book.key === key)
  //   if (book) {
  //     // make sure not already in shelf
  //     if (!shelf.find((book) => book.key === key)) {
  //       setShelf([...shelf, book])
  //     }
  //     setBooks(books.filter((book) => book.key !== key))
  //   }
  // }

  const { cartItems, addToCart } = useContext(CartContext)

  return (
    <>
      <InputWrapper>
        <div className='results'>
          {debouncedSearch && (
            <>
              <h2>{books.length} Found</h2>
              {cartItems.length > 0 && (
                <Link href={"/cart"}>
                  <h2 className='in-shelf'>{cartItems.length} Added</h2>
                </Link>
              )}
            </>
          )}
        </div>
        <input
          autoFocus
          type='search'
          placeholder='Search books, authors, etc...'
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading && <h2>......</h2>}
        {books && (
          <>
            <ListWrapper>
              <ul className='booklist'>
                {books.map((book) => (
                  <li
                    key={book.key}
                    className='book'
                    // onClick={() => handleAdd(book.key)}
                    onClick={() => addToCart(book)}>
                    <h4>{book.author_name?.[0]}</h4>
                    <h2>{book.title}</h2>
                  </li>
                ))}
              </ul>
            </ListWrapper>
          </>
        )}
        <hr />
        <ListWrapper>
          <ul>
            {cartItems.map((book) => (
              <li
                key={book.key}
                className='book'
                // onClick={() => handleAdd(book.key)}
                onClick={() => addToCart(book.key)}>
                <h4>{book.author_name?.[0]}</h4>
                <h2>{book.title}</h2>
              </li>
            ))}
          </ul>
        </ListWrapper>
      </InputWrapper>
    </>
  )
}

export default Searchbar

const InputWrapper = styled.div`
  max-width: 500px;

  .results {
    display: flex;
    justify-content: space-between;
  }

  .in-shelf {
    color: #05a100;
  }
`
const ListWrapper = styled.div`
  ul {
    margin: 0.2rem;
    padding: 0;
    list-style-type: none;
  }
  .book {
    padding: 0.25rem;
  }

  .book:hover {
    background-color: antiquewhite;
  }
`
