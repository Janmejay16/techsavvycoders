import {useState, useEffect} from 'react'
import ls from 'local-storage'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Explore from './components/Explore'
import Register from './components/Register'
import Login from './components/Login'
import Vatsal from './components/Vatsal'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {

  const [isLoggedIn,setLoggedIn] = useState(false)
  const [currentUser,setCurrentUser] = useState({})
  useEffect(() => {
    if (ls.get('loggedIn') == true) {
      setCurrentUser(ls.get('currentUser'))
      setLoggedIn(true)
    }
  },[])
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div style={{marginLeft: "20vw"}}>
      <Route
        exact path="/"
        component={() => <Home 
        isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
      />
      <Route
        exact path="/account"
        component={() => <Dashboard 
          isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
      />
      <Route
        exact path="/explore"
        component={() => <Explore 
          isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
      />
      <Route
        exact path="/profile"
        component={() => <Profile 
          isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
      />
      <Route
        exact path="/register"
        component={() => <Register
          isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
      />
      <Route
        exact path="/login"
        component={() => <Login
          isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
      />
      <Router exact path="vatsal" component={Vatsal} />
    </div>
    </Router>
  )
}

export default App;
