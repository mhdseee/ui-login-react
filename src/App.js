import Greeting from './components/Greeting'
import './App.css'
import { useState } from "react"
const App =()=>{
    const [LogIn, setLogin] = useState(false)

    const handleLogIn = () => {
        setLogin(true)
    }
    const handleLogOut = () => {
        setLogin(false) 
    }

    let button
    if(LogIn){
        button= <button className="btn btn-primary" id="marg" onClick={handleLogOut}>LogOut</button>
    }else{
        button= <button className="btn col-md-4 btn-primary" id="marg" onClick={handleLogIn}>LogIn</button>
    }

    return( 
        <div>
            <Greeting LogIn={LogIn} />
            <div className="container">
            {button}

            </div>
        </div>
    )
}
export default App