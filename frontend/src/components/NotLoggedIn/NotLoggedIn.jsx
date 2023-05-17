import { Link } from "react-router-dom";
import "./NotLoggedIn.css";

export default function NotLoggedIn(props) {
    return (
        <div className="notlogged">
            <h1 className="notlogged-title">Please Login to see the {props.text}.</h1>
            <Link to="/login" className="redirect-link">Login Now</Link>
        </div>
    )
}