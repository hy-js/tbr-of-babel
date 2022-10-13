import create from "zustand"
import { persist } from "zustand/middleware"
const useCart = create(
  persist(
    (set, get) => ({
      cartContent: [],
      addTocart: (params) => {
        set((state) => ({
          cartContent: [...state.cartContent, params]
        }))
      },
      updatecart: ({ params, mycart }) => {
        set((state) => ({
          cartContent: mycart
        }))
      },
      clearCart: () => set({ cartContent: [] }),
      removeFromCart: (params) =>
        set((state) => ({
          cartContent: state.cartContent.filter((item) => item.id !== params.id)
        }))
    }),
    { name: "cart" }
  )
)
export default useCart
