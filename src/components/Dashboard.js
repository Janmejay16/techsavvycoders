import styled from 'styled-components'
import { Route, Redirect } from 'react-router-dom';
import Login from './Login'
import Navbar from './Navbar';
import {useState} from 'react'
import axios from 'axios'
import ls from 'local-storage'

const Profile = styled.div`
    width: 80%;
    margin: 2vw auto;
    padding: 3vw;
    border-radius: 2vw;
    box-shadow: 2px 3px 4px 2px rgba(0,0,0,0.6);
    h2 {
        display: inline-block;
        width: 40%;
        font-size: 1.5vw;
        margin: 1vw 5%;
        span {
            font-weight: 400;
            color: #777;
        }
    }
    .image {
        padding: 1vw;
        border: 1px solid black;
        border-radius: 3vw;
        h4 {
            font-weight: 500;
            color: #888;
            margin: 0.5vw auto;
        }
        display: inline-block;
        width: 35%;
        margin: 2vw 5%;
        img {
            margin: 1vw auto;
            width: 100%;
        }
    }
`
const Notf = styled.div`
    position: fixed;
    padding: 2vh 2%;
    z-index: 5;
    width: 91%;
    left: 2.5%;
    top: 2vh;
    height: 92vh;
    background: white;
    box-shadow: 1px 1px 2px 2px #666;
    border-radius: 2vw;
    color: black;
    h5 {
        margin: 3vw auto 0.1vw auto;
    }
    .button {
        position: absolute;
        right: 3vw;
        font-weight: 600;
        font-size: 3vw;
        color: #ffa900;
        border: none;
        background: none;
        cursor: pointer;
    }
    button {
        margin: 0vw 5vw 2vw 0;
        border: none;
        background: #ffa900;
        color: white;
    }
`

const Dashboard = (props) => {
    
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    // const [notify,setNotify] = useState(false)
    // const [notifications, setNotifications] = useState(null)
    
    const logout = (e) => {
        setLoggedIn(false)
        setCurrentUser(null)
        ls.set('loggedIn',false)
        ls.set('currentUser',null)
        alert('Logged Out!')
    }

    // const fetchNotifications = () => {
    //     role=="user" ? 
    //     (axios.get('/notifications/'+currentUser.id)
    //     .then(res => {
    //         console.log(res.data)
    //         setNotifications(res.data)
    //         setNotify(true)
    //     }))
    //     :
    //     (axios.get('/enquiries/'+currentUser.id)
    //     .then(res => {
    //         console.log(res.data)
    //         setNotifications(res.data)
    //         setNotify(true)
    //     }))
    // }

    // const closeNotifications = () => {
    //     setNotify(false)
    //     setNotifications(null)
    // }

    // const approve = () => {
    //     var notification = {
    //         "user_id": notifications.user_id,
    //         "status": "approved",
    //         "enquiry_id": notifications.enquiry_id
    //     }
    //     axios.post('/notifications/', notification)
    //     .then(res => {
    //         if(res.data.success == true) {
    //             alert('Request Approved')
    //             setNotify(false)
    //             setNotifications(null)
    //         }
    //     })
    // }

    // const decline = () => {
    //     var notification = {
    //         "user_id": notifications.user_id,
    //         "status": "declined",
    //         "enquiry_id": notifications.enquiry_id
    //     }
    //     axios.post('/notifications/', notification)
    //     .then(res => {
    //         if(res.data.success == true) {
    //             alert('Request Declined')
    //             setNotify(false)
    //             setNotifications(null)
    //         }
    //     })
    // }

    if(isLoggedIn) {
        return (
            <Redirect to="/explore" />
        )
    }
    else {
        return <Login isLoggedIn={isLoggedIn} currentUser={currentUser} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />
    }
}

export default Dashboard