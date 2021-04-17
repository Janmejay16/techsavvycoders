import styled from 'styled-components'
import {Link, Redirect} from 'react-router-dom'
import DashNav from './DashNav'
import ls from 'local-storage'

const Nav = styled.div`
    display: flex;
    padding: 2vw 0;
    margin: 0 0 2vw 0;
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
            width: 20%;
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
    if (!isLoggedIn) {
        return (
            <Nav>
                <div className="logo">
                    {/* <img src={} /> */}
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/account">Login</Link></li>
                </ul>
            </Nav>
        )
    }
    else {
        return (
            <DashNav 
            isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        )
    }
    
}

export default Navbar