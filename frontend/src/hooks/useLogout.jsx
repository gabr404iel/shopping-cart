import { useAuthContext } from "./useAuthContext"
import { useDispatch } from "react-redux"
import { setCart } from "../redux/cartSlice"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const reduxDispatch = useDispatch()

    const logout = () =>{
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        reduxDispatch(setCart([]));
    }

    return { logout }
}