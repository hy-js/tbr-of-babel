import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"
import styled from "styled-components"

import { OLBOOK } from "../lib/types"

// Zustand
import useCart from "@/store/store"

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

  // Cart functionalities
  const addTocart = useCart((state) => state.addTocart)
  const updatecart = useCart((state) => state.updatecart)
  const mycart = useCart((state) => state.cartContent)
  const addProduct = (params: any) => {
    const product = mycart.findIndex((item: OLBOOK) => item.key === params.id)
    if (product !== -1) {
      mycart[product].quantity++
      updatecart({ params, mycart })
    } else {
      addTocart(params)
    }
  }

  return (
    <>
      <InputWrapper>
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
                    onClick={() => addProduct(book)}>
                    <h4>{book.author_name?.[0]}</h4>
                    <h2>{book.title}</h2>
                  </li>
                ))}
              </ul>
            </ListWrapper>
          </>
        )}
        <hr />
      </InputWrapper>
    </>
  )
}

export default Searchbar

const InputWrapper = styled.div`
  max-width: 500px;
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
    background-color: black;
  }
`
