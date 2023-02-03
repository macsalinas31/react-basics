

function Login() {
    return(
        <>
        <div className="card">
            <div className="card-body">
                <form className="form-group">
                    <label htmlFor="username" >Username:</label>
                    <input name="username" class="form-control"></input>
                    <label for="password">Password:</label>
                    <input name="password" class="form-control"></input><br></br>
                    <button className="btn btn-primary"> Login</button>
                </form>
            </div>
        </div>
           
        </>
    )
}

export default Login;