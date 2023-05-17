import './Product.css'
import { BsFillCartPlusFill, BsCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { setCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Product({product}){
    const dispatch = useDispatch();
    const [purchased, setPurchased] = useState(false);
    const { state } = useAuthContext()
    const { user } = state

    async function handleAddToCart(product){
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
                        quantity: 1
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
        <div className="product-card">
            <Link to={`/shop/${product.id}`} state={product.id}>
                <div className='product-card-container'>
                    <img src={product.image[0].url}/>
                    <div className='product-name' >{product.name}</div>
                    <div className='product-price'>$ {product.price}</div>
                </div>
            </Link>
            <div className='product-addcart-container'>
                {!purchased && <BsFillCartPlusFill className='product-addcart' onClick={()=>{handleAddToCart(product)}}/>}
                {purchased &&<BsCartCheckFill className='product-addcart_purchased' />}
            </div>
        </div>
    )
}