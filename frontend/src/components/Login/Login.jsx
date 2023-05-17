import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, loading } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await login(email, password) || null
        if (res.error === null) {
            navigate('/')
        }
    }

    return (
        <>
            <p className='message'>To use a test account:<br />Email: test@test.com<br />Pw: TESTtest123.</p>
            <div className="login-box">
                <p>Login</p>
                <form action='POST'>
                    <div className="user-box">
                        <input required name="email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input required name="password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
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
                <p className="switch-p">Don't have an account? <Link to="/signup" className="a2">Sign up!</Link></p>
                {error && <p className='error'>{error}</p>}
            </div>
        </>
    )
}