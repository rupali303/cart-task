import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate, useParams } from 'react-router-dom'

function Navbar(product1) {

  const { id } = useParams()
  const navigate = useNavigate()
  const handleStart = () => {
    navigate("/")
  }

  const handleCart = (product1,check) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const singleProduct = cart?.find((item) => item.id === product1.id)

    if (singleProduct) {
      const updateCart = cart.map((item) => {
        if (item.id === product1.id) {
          return {
            ...item, quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem("cart", JSON.stringify(updateCart))
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, { ...product1, quantity: 1 }]))
    }
    if (check) {
      navigate("/cart")
    }

  }

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="containerr mt-10 bg-slate-200 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        </Link>
        <nav className="md:ml-auto flex bg-slate-200 flex-wrap items-center text-base justify-center">
        </nav>
        <button onClick={handleStart} className="inline-flex mr-3 items-center bg-red-600 text-rose-200 border-1 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base  md:mt-0">Home
        </button>
        <button onClick={() => handleCart(product1, true)} className="inline-flex mr-0 items-center bg-red-600 text-rose-200 border-1 py-1 px-3 focus:outline-none hover:bg-red-800 rounded text-base  md:mt-0"> <ShoppingCartIcon sx={{ color: "text-rose-200" }} />Buy now
        </button>
      </div>
    </header>
  )
}

export default Navbar