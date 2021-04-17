import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.div`
    display: flex;
    padding: 1vw 0;
    margin: 0;
    width: 100%;
    background: rgba(0,0,0,0.4);
    aling-items: center;
    .logo {
        margin: 0;
        width: 20%;
        text-align: center;
        img {
            width: 40%;
        }
    }
    ul {
        width: 70%;
        margin: 0 auto;
        padding: 0;
        padding-left: 10%;
        display: flex;
        margin: 0;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        li {
            width: 10%;
            margin: 0;
            font-size: 1.6vw;
            a {
                color: white;
                text-decoration: none;
                &:active {
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
`

const Navbar = (props) => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    return(
        <Nav>
            <div className="logo">
                {/* <img src={} /> */}
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/account">{(isLoggedIn ? "Hi, "+currentUser.name : "Login")}</Link></li>
            </ul>
        </Nav>
    )
}

export default Navbar