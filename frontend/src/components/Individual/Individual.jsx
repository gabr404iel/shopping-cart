import { useOutletContext, useParams } from "react-router-dom"
import './Individual.css'
import { useState } from "react"
import MyCarousel from "../Carousel/MyCarousel";
import { useDispatch } from "react-redux";
import { setCart } from "../../redux/cartSlice";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Individual() {

    const products = useOutletContext();
    const [quantity, setQuantity] = useState(1);
    let { id } = useParams();
    const product = products[id - 1];
    const dispatch = useDispatch();
    const [purchased, setPurchased] = useState(false);
    const { state } = useAuthContext()
    const { user } = state

    function handleQuantity(e) {
        setQuantity(e.target.value);
    }
    function incrementQuantity() {
        setQuantity((parseInt(quantity) ? parseInt(quantity) + 1 : 1));
    }
    function decrementQuantity() {
        setQuantity(parseInt(quantity) > 0 ? parseInt(quantity) - 1 : 0);
    }

    async function handleAddToCart(){
        setPurchased(true);
        const response = await fetch(`https://shoppe-api.onrender.com/api/users/addtocart`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: user.email,
                cart:{
                    product:{
                        productId: product.id,
                        quantity: quantity
                    }
                }
            })
        })
        const json = await response.json();
        dispatch(setCart(json.cart.products))

        setTimeout(() =>{
            setPurchased(false);
        },2000)
    }
    return (
        <div className="individual-container">
            <h1 className="individual-title">{product.name}</h1>
            <div className="individual-product-container">
                <div className="individual-product_image">
                    <MyCarousel images={product.image}/>
                </div>
                <div className="individual-product_details">
                    <p className="individual-product_description">{product.desc} <strong>${product.price}</strong></p>
                    <div className="individual-purchase">
                        <div className="individual-product_quantity">
                            <div className="quantity-button" onClick={() => decrementQuantity()}>-</div>
                            <input type="text" value={quantity} onChange={handleQuantity} pattern="[0-9]{3}" min={0} />
                            <div className="quantity-button" onClick={() => incrementQuantity()} >+</div>
                        </div>
                        {!purchased &&<div className="individual-addtocart" onClick={() => handleAddToCart()}>Add to Cart</div>}
                        {purchased && <div className="individual-addtocart-added">Added!</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}