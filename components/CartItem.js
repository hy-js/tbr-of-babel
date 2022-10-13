const CartItem = ({ item }) => {
  return (
    <li className='CartItem__item'>
      <div>{item.title}</div>
    </li>
  )
}

export default CartItem
