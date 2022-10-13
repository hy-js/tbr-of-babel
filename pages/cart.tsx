import { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import { breakpoints } from "../utils/breakpoints"
import styled from "styled-components"
import useCart from "../store/store"
import { OLBOOK } from "@/lib/types"

export default function Create() {
  // zustand
  const cart = useCart((state) => state.cartContent)
  const removeFromCart = useCart((state) => state.removeFromCart)
  const [mycart, setCart] = useState([])

  const clearCart = useCart((state) => state.clearCart)
  const [mytotalqty, setTotalqty] = useState()

  const totalqty = cart.length

  useEffect(() => {
    setCart(cart)
    setTotalqty(totalqty)
  }, [cart])

  console.log(cart)

  return (
    <>
      <Head>
        <title>TBR of Babel</title>
        <meta name='description' content='TBR of Babel | Cart' />
      </Head>
      <PageWrapper>
        <HeaderWrapper>
          <a href='/'>
            <Image
              src='/babel-tall.jpg'
              alt='Bookshelf at Yale'
              width={324}
              height={452}
            />
          </a>
          <DescriptionWrapper>
            <h1>Cart</h1>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              numquam odio incidunt unde saepe aliquam reprehenderit a ipsum
              aspernatur eaque, soluta culpa dolore!
            </p>
            {cart.length > 0 && (
              <>
                <button onClick={clearCart}>
                  <h2>Clear Cart</h2>
                </button>
              </>
            )}
            <ListWrapper>
              {mycart.map((item: OLBOOK) => (
                <div key={item.key} className='book'>
                  <p>{item.author_name?.[0]}</p>
                  <h2>{item.title}</h2>
                  {/* <button onClick={() => removeFromCart(item.key)}>
                    Remove
                  </button> */}
                </div>
              ))}
              {cart.length > 0 && (
                <>
                  <button onClick={clearCart}>
                    <h2>Save Cart</h2>
                  </button>
                </>
              )}
            </ListWrapper>
          </DescriptionWrapper>
        </HeaderWrapper>
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeaderWrapper = styled.div`
  max-width: 600px;
  padding-top: 7.5vh;
  padding-bottom: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
  }
`

const DescriptionWrapper = styled.div`
  max-width: 200px;
  margin: 0 2rem;

  p {
    margin-top: 0rem;
  }
  a {
    display: inline-block;
    padding: 0.25rem 0;
  }
  @media (max-width: ${breakpoints.s}px) {
    max-width: 70vw;
    width: 250px;
    margin: 0rem auto;
    margin-bottom: 1rem;

    h1 {
      padding-top: 2rem;
    }
  }
`

const ListWrapper = styled.div`
  .book {
    padding: 1rem 0;
  }
`
