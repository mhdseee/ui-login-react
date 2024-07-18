import SignUp from "./SignUp"
import Home from "./Home"
const Greeting = (props)=>{
    const UserGreeting= ()=>{return <Home/>}
    const GuestGreeting= ()=>{return <SignUp/>}

    let show= <GuestGreeting />

    if(props.LogIn){
        show= <UserGreeting />
    }
    return(
        <div>
            {show}
        </div>
    )
}
export default Greeting