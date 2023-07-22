import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {

    const [total, setTotal] = useState(0)
    const [totalItem, setTotalItem] = useState(0)
    const navigate = useNavigate()
    const carts = JSON.parse(localStorage.getItem("cart"))

    useEffect(() => {
        const addTotal = carts.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
        setTotal(addTotal)
    }, [carts])

    useEffect(() => {
        const addTotal2 = carts.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
        setTotalItem(addTotal2)
    }, [carts])

    const handleRemove = (id, item) => {
        if (carts.item < 1) {
            const updateCart = carts.filter((item) => item.id !== id)
            localStorage.setItem("cart", JSON.stringify(updateCart))
            navigate("/cart")
        }
    }

    const handleIncrement = (id) => {
        const updateCart = carts.map((item) => {
            if (item.id === id) {
                return {
                    ...item, quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem("cart", JSON.stringify(updateCart))
        navigate("/cart")
    }

    const handleDecrement = (id) => {
        const updateCart = carts.map((item) => {
            if (item.id === id) {
                return {
                    ...item, quantity: item.quantity - 1
                }
            }
            return item
        })
        localStorage.setItem("cart", JSON.stringify(updateCart))
        navigate("/cart")
    }

    return (
        <div class="container mx-auto mt-10">
            <div class="flex shadow-md my-10">
                <div class="w-6/8 bg-white px-10 py-10">
                    <div class="flex justify-between border-b pb-8">
                        <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 class="font-semibold text-2xl">{carts.length} Items</h2>
                    </div>
                    <div class="flex mt-10 mb-5">
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>
                    {carts.map((cart) => {
                        return <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div class="flex w-2/5">
                                <div class="w-20">
                                    <img class="h-24" src={cart.image} alt="" />
                                </div>
                                <div class="flex flex-col justify-between ml-4 flex-grow">
                                    <span class="font-bold text-sm">{cart.title}</span>
                                    <a onClick={() => handleRemove(cart.id)} href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                </div>
                            </div>

                            <div class="flex justify-center w-1/5">
                                <svg onClick={() => handleDecrement(cart.id)} class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>

                                <input class="mx-2 border text-center w-8" type="text" value={cart.quantity} />

                                <svg onClick={() => handleIncrement(cart.id)} class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                            </div>
                            <span class="text-center w-1/5 font-semibold text-sm">${cart.price}</span>
                            <span class="text-center w-1/5 font-semibold text-sm">${cart.price * cart.quantity}</span>

                            <div class="lg:w-6/8 w-full mx-auto overflow-auto">
                                <table style={{ border: "1px solid" }} class="table-auto w-full text-left whitespace-no-wrap">
                                    <thead>
                                        <tr style={{ border: "1px solid" }}>
                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Title</th>
                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="px-4 py-3">{cart.title}</td>
                                            <td class="px-4 py-3">{cart.quantity}</td>
                                            <td class="px-4 py-3">{cart.price}</td>
                                            <td class="px-4 py-3 text-lg text-gray-900">{cart.price * cart.quantity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart