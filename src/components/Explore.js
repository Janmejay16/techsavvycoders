import {Redirect} from 'react-router-dom'
import ls from 'local-storage'

const Explore = (props) => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    if(ls.get('loggedIn')==true) {
        return (
            <div>
                Explore
            </div>
        )
    }
    else {
        return <Redirect to="/" />
    }
}
export default Explore