import Products from "../Product/Products";
import './Shop.css';
import { useOutletContext } from "react-router-dom";

export default function Shop() {
    const products = useOutletContext();
    return (
        <div className="shop-container">
            <div className="products-container">
                <Products products={products}/>
            </div>
        </div>
    )
}