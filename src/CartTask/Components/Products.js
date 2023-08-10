import React from 'react'
import { Link } from 'react-router-dom'

function Products({ product }) {
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">

                    {product?.map((item) => {
                        return <Link to={`/product/${item.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                            <a className="block relative h-48 rounded overflow-hidden ">
                                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={item.image} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                <p className="mt-1">${item.price}</p>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products