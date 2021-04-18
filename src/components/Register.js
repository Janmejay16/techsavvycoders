import {Link, Redirect} from 'react-router-dom'
import {TextField, Button} from '@material-ui/core'
import {useState} from 'react'
import axios from 'axios'
import ls from 'local-storage'

const Register = props => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    const [password,setPassword] = useState("")
    const [details,setDetails] = useState({})
    const handleInput = e => {
        setDetails({...details,[e.target.name]: e.target.value})
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = () => {
        console.log(details)
        if(password == details.password) {
            axios.post('/register',details)
            .then(res => {
                alert(res.data.message)
                if (res.data.success == true) {
                    setLoggedIn(true)
                    setCurrentUser(res.data.user)
                    ls.set('currentUser',res.data.user)
                    ls.set('loggedIn',true)
                }
            })
        }
    }
    if(isLoggedIn) {
        return (
            <Redirect to="/explore" />
        )
    }
    else {
        return (
            <div>
                <div style={{width: "70%", margin: "1vw auto"}}>
                    {/* Name */}
                    <TextField
                        name="name"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Enter Your Name"
                    />
                    {/* Email */}
                    <TextField
                        name="email"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Email"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Enter Your Email"
                    />
                    {/* UserName */}
                    <TextField
                        name="username"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Username"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Enter Your Username"
                    />
                    {/* Mobile */}
                    <TextField
                        name="mobile"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Mobile"
                        type="number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Enter Your Mobile Number"
                    />
                    <TextField
                        name="password"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Password"
                        type="password"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Enter Your Password"
                    />
                    <TextField
                        name="confirmpassword"
                        onChange={handlePassword}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Confirm Your Password"
                    />
                    <Button variant="contained" color="primary" style={{fontSize: "1vw",width: "40%",margin: "1vw 5%"}} onClick={handleSubmit}>Submit</Button>
                    <Button variant="contained" color="secondary" style={{width: "40%",margin: "1vw 5%", fontSize: "1vw",color: "white"}} onClick={handleSubmit}><Link style={{fontSize: "1vw",textDecoration: "none",color: "white"}} to="/login">Already have an account? Sign In Here!</Link></Button>
                </div>
            </div>
        )
    }
}

export default Register