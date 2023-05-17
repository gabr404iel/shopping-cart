import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
    const [name, setName ] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, loading, error } = useSignup()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signup(name, email, password)
        if (res.error === null) {
            navigate('/')
        }
    }

    return (
        <div className="login-box">
            <p>Sign Up</p>
            <form action='POST'>
                <div className="user-box">
                    <input required name="name" type="text" onChange={(e)=>{setName(e.target.value)}}/>
                        <label>Name</label>
                </div>
                <div className="user-box">
                    <input required name="email" type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label>Email</label>
                </div>
                <div className="user-box">
                    <input required name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label>Password</label>
                </div>
                <button onClick={handleSubmit} disabled={loading}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
            </form>
            <p className="switch-p">Already have an account? <Link to="/login" className="a2">Login to your account</Link></p>
            {error && <p className='error'>{error}</p>}
        </div>
    )
}