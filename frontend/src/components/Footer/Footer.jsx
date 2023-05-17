import './Footer.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-text'>
                © 2023 Quan Ming
            </div>
            <div className='footer-links'>
                <a href="https://www.linkedin.com/in/tanqm/" target='_blank'><AiFillLinkedin fontSize={32} /></a>
                <a href="https://github.com/wahpiangle/Shopping-Cart" target='_blank'><AiFillGithub fontSize={32} /></a>
            </div>
        </div >
    )
}