import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Route
        exact path="/"
        component={() => <div>Hey</div>} 
      />
      <Route
        exact path="/login"
        component={() => <div>Login</div>} 
      />
    </Router>
  )
}

export default App;
