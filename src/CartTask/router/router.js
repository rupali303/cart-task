import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "../Pages/Home";
import ProductDescription from "../Pages/ProductDescription"
import Cart from "../Pages/Cart";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={< Home/>}/>
            <Route path="product/:id" element={<ProductDescription/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Route>
    )
)