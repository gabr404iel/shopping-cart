import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDispatch } from "react-redux"
import { setCart } from "../redux/cartSlice";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()
    const reduxDispatch = useDispatch()

    const login = async (email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch('https://shoppe-api.onrender.com/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        const cartResponse = await fetch(`https://shoppe-api.onrender.com/api/users/cart/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        const cartJson = await cartResponse.json()

        if (!response.ok) {
            setLoading(false)
            setError(json.error)
            return
        }
        if (response.ok && cartResponse.ok) {
            //save user email & token to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //set user to context
            dispatch({ type: 'LOGIN', payload: json })
            reduxDispatch(setCart(cartJson.products))

            setLoading(false)
            return json
        }


    }
    return { login, loading, error }
}