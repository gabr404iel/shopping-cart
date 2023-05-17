import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import RootLayout from './layout/RootLayout'
import ShopLayout from './layout/ShopLayout'
import NotFound from './components/NotFound/NotFound'
import Shop from './components/Shop/Shop'
import Contact from './components/Contact/Contact'
import Individual from './components/Individual/Individual'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import NotLoggedIn from './components/NotLoggedIn/NotLoggedIn'

function App() {

  const { state } = useAuthContext();
  const { user } = state

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={user ? <Cart /> : <NotLoggedIn text="cart"/>} />
        <Route path='*' element={<NotFound />} />
        <Route path="shop" element={user ? <ShopLayout/> : <NotLoggedIn text='shop'/>}>
          <Route index element={<Shop/>} />
          <Route path=":id" element={<Individual/>} />
        </Route>
        <Route path="shop:id" element={<Individual/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={!user ? <Login /> : <Home/>} />
        <Route path="signup" element={!user ? <Signup /> : <Home/>} />
      </Route>
    ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
