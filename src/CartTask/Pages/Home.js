import React, { useEffect, useState } from 'react'
import Products from '../Components/Products'

function Home() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const responce = await fetch('https://fakestoreapi.com/products')
      const data = await responce.json()
      setProduct(data)

    }
    getProducts()
  }, [])

  return (
    <div>
      {product && <Products product={product} />}
    </div>
  )
}

export default Home