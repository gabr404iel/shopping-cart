import { Outlet } from "react-router-dom"
import data from "../assets/data"
import { useSelector, useDispatch } from 'react-redux'
import { fetch } from '../redux/productSlice'

export default function ShopLayout() {
    const products = useSelector((state) => state.product.value)
    const dispatch = useDispatch();
    dispatch(fetch(data));

    return (
        <div className="shop-layout">
            <Outlet context={products}/>
        </div>
    )
}