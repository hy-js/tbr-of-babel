import Link from "next/link"
import { AnimateSharedLayout, motion } from "framer-motion"
import { useRouter } from "next/dist/client/router"
import { isActiveLink } from "../lib/utils"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { useContext } from "react"
import CartContext from "../context/cart/CartContext"

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/"
  },
  // {
  //   name: "Explore",
  //   href: "/tower"
  // },
  {
    name: "Create",
    href: "/create"
  }
]

const Header = () => {
  const { cartItems, showHideCart } = useContext(CartContext)
  const router = useRouter()
  return (
    <HeaderWrapper>
      <header>
        <AnimateSharedLayout>
          <nav>
            {links.map(({ name, href }) => (
              <Link key={name} href={href}>
                <a className='mr-6 sm:mr-8 flex flex-col relative'>
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
          </nav>
          <hr />
          <Link href={"/cart"}>
            <h2>
              Cart
              {cartItems.length > 0 && <span> ({cartItems.length})</span>}
            </h2>
          </Link>
          {/* <ul>
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </ul> */}
        </AnimateSharedLayout>
      </header>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  width: 300px;
  height: 20vh;
  min-height: auto;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
  }
`
