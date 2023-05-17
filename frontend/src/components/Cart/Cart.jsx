import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';
import { setCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Cart() {
    const cart = useSelector(state => state.cart.value);
    const { state } = useAuthContext()
    const { user } = state
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.value)

    const totalPrice = cart.reduce((accumulator, item) => {
        const product = products.find((p) => p.id == item.productId);
        if (product) {
          return accumulator + product.price * item.quantity;
        }
        return accumulator;
    }, 0);


    async function handleIncrementItem(id) {
        const response = await fetch(`https://shoppe-api.onrender.com/api/users/cart/increment/${id}`,
            {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({email: user.email, product_id: id})
            }
        )
        const json = await response.json();
        dispatch(setCart(json.products))
    }

    async function handleDecrementItem(id) {
        const response = await fetch(`https://shoppe-api.onrender.com/api/users/cart/decrement/${id}`,
            {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({email: user.email, product_id: id})
            }
        )
        const json = await response.json();
        dispatch(setCart(json.cart.products))
    }

    async function handleClearItem(id) {
        const response = await fetch(`https://shoppe-api.onrender.com/api/users/cart/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: user.email, product_id: id})
        })
        const json = await response.json();
        dispatch(setCart(json.cart.products))
    }

    if (cart.length !== 0) {
        return (
            <div className="cart">
                <div className="cart-title">Cart</div>
                <div className='cart-container'>
                    <div className='cart-items'>
                        {cart.length > 0 && cart.map(item => (
                            <div className='cart-item' key={products[item.productId-1].id}>
                                <div className='cart-item-image'>
                                    <img src={products[item.productId-1].image[0].url} />
                                </div>
                                <div className='cart-item-details' key={products[item.productId-1].productId}>
                                    <div className='cart-item-details-name'>{products[item.productId-1].name}</div>
                                    <div className='cart-item-details-price'>${products[item.productId-1].price}</div>
                                </div>
                                <div className='cart-item-quantity'>
                                    <div className='cart-item-quantity-minus' onClick={() => handleDecrementItem(products[item.productId-1].id)}>-</div>
                                    {item.quantity}
                                    <div className='cart-item-quantity-plus' onClick={() => handleIncrementItem(products[item.productId-1].id)}>+</div>
                                </div>
                                <RxCross1 className='cart-clear-item' onClick={() => handleClearItem(products[item.productId-1].id)}></RxCross1>
                            </div>
                        ))}
                    </div>
                    <div className='cart-total'>
                        <div className='cart-total-title'>Cart total</div>
                        <div className='cart-total-items-container'>
                            <div className='cart-total-subtitle'>Subtotal</div>
                            <div className='cart-total-subtotal'>${totalPrice}</div>
                            <div className='cart-total-subtitle'>Shipping</div>
                            <div className='cart-total-shipping'>No Shipping Options are available</div>
                        </div>
                        <input type="hidden" name="cartTotalPrice" value={0} />
                        <div className='button-wrapper'>
                            <a href="https://buy.stripe.com/test_9AQ3ehcER27o5689AA"><button className='cart-total-checkout'>Proceed to Checkout</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="cart-empty">
                <div className="cart-title">Cart</div>
                <p className='cart-empty-text'>Your Cart is empty. Add some items into your cart now!</p>
                <Link to="/shop" className='redirect-shop'>Explore the catalog</Link>
            </div>
        )
    }

}