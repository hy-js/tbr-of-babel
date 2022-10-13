import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimateSharedLayout, motion } from "framer-motion"
import { useRouter } from "next/dist/client/router"
import { isActiveLink } from "../lib/utils"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

import useCart from "../store/store"

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Explore",
    href: "/explore"
  },
  {
    name: "Create",
    href: "/create"
  }
]

const Header = () => {
  const router = useRouter()
  const cart = useCart((state) => state.cartContent)
  const totalqty = cart.length

  const [mytotalqty, setTotalqty] = useState()

  useEffect(() => {
    setTotalqty(totalqty)
  }, [cart])

  return (
    <HeaderWrapper>
      <header>
        <AnimateSharedLayout>
          <a href='https://www.rhysad.com/'>
            <div className='logo'>
              <h2>
                TBR <br /> OF BABEL
              </h2>
            </div>
          </a>
          <nav>
            {links.map(({ name, href }) => (
              <Link key={name} href={href}>
                <a>
                  <h2>{name}</h2>
                  {isActiveLink(href, router.pathname) && (
                    <motion.div
                      layoutId='navigation-underline'
                      className='navigation-underline'
                      animate
                    />
                  )}
                </a>
              </Link>
            ))}
            <hr />
            <a>
              <Link href='/cart'>
                <h2>Cart ({mytotalqty})</h2>
              </Link>
            </a>
          </nav>
        </AnimateSharedLayout>
      </header>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  width: 200px;
  height: 25vh;
  min-height: auto;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    font-weight: 700;
    font-style: italic;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    background-color: white;
    color: black;
  }

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
  }
`
