import styled from 'styled-components'
import {Link} from 'react-router-dom'
import ls from 'local-storage'

const Dash = styled.nav`
    background: rgba(0,0,0,0.9);
    float: left;
    width: 10vw;
    @media screen and (max-width: 768px) {
        width: 20vw;
    }
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content; center;
    align-items: center;
    ul {
        height: 100vh;
        padding: 0;
        list-style: none;
        li {
            margin: 3vw auto;
            color: white;
            text-decoration: none;
            cursor: pointer;
            a {
                color: white;
                text-decoration: none;
            }
        }
    }
`

const DashNav = props => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    const logout = (e) => {
        setLoggedIn(false)
        setCurrentUser(null)
        ls.set('loggedIn',false)
        ls.set('currentUser',null)
        alert('Logged Out!')
    }
    return (
        <Dash>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li onClick={logout}>Logout</li>
            </ul>
        </Dash>
    )
}

export default DashNav