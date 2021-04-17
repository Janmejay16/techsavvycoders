const { default: Navbar } = require("./Navbar")

const Home = (props) => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    return (
        <div>
            <Navbar

             />
            Hey
        </div>
    )
}

export default Home