import { Check } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDescription() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product1, setProduct1] = useState({})
    useEffect(() => {
        const getProducts1 = async () => {
            const responce = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await responce.json()
            setProduct1(data)

        }
        getProducts1()
    }, [])

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
        if(check){
            navigate("/cart")
        }
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded" alt="hero" src={product1.image} />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{product1.title}</h1>
                    <span className="title-font font-medium text-2xl text-gray-900">${product1.price}</span>
                    <div className="flex justify-center gap-3">
                        <button onClick={() => handleCart(product1,true)} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add to bag</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDescription