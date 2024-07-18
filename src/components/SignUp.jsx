import "../App.css"
const SignUp = () => {
  return (
    <>
    <div className="container" >
    <form className="row g-3 needs-validation was-validated" id="marg" novalidate="">
        <p className="fs-1 fw-bold text-center">SIGN UP</p>
        <div className="col-md-12 position-relative">
            <label htmlFor="validationTooltip01" className="form-label">First name</label>
            <input type="text" className="form-control" id="validationTooltip01"  required=""/>
        
        </div>
        <div className="col-md-12 position-relative">
            <label htmlFor="validationTooltip02" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationTooltip02"  required=""/>
            
        </div>
        <div className="col-md-12 position-relative">
            <label htmlFor="validationTooltipUsername" className="form-label">Username</label>
            <div className="input-group has-validation">
            <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
            <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required=""/>
            
            </div>
        </div>
        <div className="col-md-12 position-relative">
            <label htmlFor="inputPassword5" className="form-label">Password</label>
            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
            <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>
        </div>
    </form>
    </div>
    </>
  )
}

export default SignUp