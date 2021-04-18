import {useState} from 'react'
import axios from 'axios'
import ls from 'local-storage'
import {Link, Redirect} from 'react-router-dom'
import {TextField, Button} from '@material-ui/core'

const Login = (props) => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    const [credentials,setCredentials] = useState({
        "email": null,
        "password": null
    })
    const handleInput = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials)
    }
    const handleSubmit = () => {
        console.log(credentials)
        axios.post('/login', credentials).then(res => {
            if(res.data.success==true) {
                alert(res.data.message)
                setLoggedIn(true)
                setCurrentUser(res.data.user)
                ls.set('currentUser',res.data.user)
                ls.set('loggedIn',true)
                console.log(currentUser)
            }
            else {
                alert('Something Went Wrong!')
            }
        })
    }
    if(isLoggedIn) {
        return (
            <Redirect to="/explore" />
        )
    }
    else {
        return (
            <div>
                <TextField
                    value={credentials.email}
                    name="email"
                    id="email"
                    onChange={handleInput}
                    label="Email"
                    placeholder="Enter your Email"
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                />
                <TextField
                    type="passsword"
                    value={credentials.password}
                    name="password"
                    id="password"
                    onChange={handleInput}
                    label="Password"
                    placeholder="Enter your Password"
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                />
                <Button variant="contained" color="primary" style={{fontSize: "1vw",width: "40%",margin: "1vw 5%"}} onClick={handleSubmit}>Submit</Button>
                <Button variant="contained" color="secondary" style={{width: "40%",margin: "1vw 5%", fontSize: "1vw",color: "white"}} onClick={handleSubmit}><Link style={{fontSize: "1vw",textDecoration: "none",color: "white"}} to="/register">Do not have an account? Sign Up Here!</Link></Button>
            </div>
        )
    }
}

export default Login