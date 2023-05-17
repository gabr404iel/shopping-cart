import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar"
import data from "../assets/data"
import { useSelector, useDispatch } from 'react-redux'
import { fetch } from '../redux/productSlice'

export default function RootLayout() {
    const products = useSelector((state) => state.product.value)
    const dispatch = useDispatch();
    dispatch(fetch(data));
    return (
        <div className="root-layout">
            <header>
                <NavBar/>
            </header>
            <main>
                {/* Outlet is a placeholder for the content of children routes */}
                <Outlet products={products}/>
            </main>
            <Footer/>
        </div>
    )
}