//Username
//password
//rem checkbox



import { useState } from "react";

function Login () {

        const [formData1, setFormData1] = useState ({
            username : "",
            password : "",
            rememberme: "",
        })

const submitForm = (e) => {
    e.preventDefault()
    console.log(formData1)
}
    return (
        <>
        <form role="form">
            <div>
                <h1>Log In</h1>
            <label htmlFor="username">User Name:
                    <input name="username" type="text" placeholder="First username" className="form-control"></input>
            </label>
            <label htmlFor="password">Password:
                    <input name="username" type="text" placeholder="First username" className="form-control"></input>
            </label>
            </div>
            <div>
            <input className="form-check-input" name="rememberme" type="checkbox" defaultChecked></input>
                    <label className="form-check-label" type="checkbox">
                    Remember me
                    </label>
            </div>
            
            <div className="submit-button">
                <button className="btn btn-secondary" type="submit" onClick={submitForm}>Submit</button>
            </div>
        </form>
        </>
    )
}
export default Login;