import { useContext } from "react"
import CartContext from "../context/cart/CartContext"

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext)
  let opts = { format: "%s%v", symbol: "€" }
  return (
    <li className='CartItem__item'>
      <div>{item.title}</div>
    </li>
  )
}

export default CartItem
