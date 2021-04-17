import {useState, useEffect} from 'react'
import ls from 'local-storage'
import Home from './components/Home'
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
      <Route
        exact path="/"
        component={() => <Home 
          const isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} 
      />
      <Route
        exact path="/login"
        component={() => <div>Login</div>} 
      />
    </Router>
  )
}

export default App;
