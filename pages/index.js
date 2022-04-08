/*eslint-disable */ 
import Head from "next/head";


function LoginPage(){
    return (
    
    <><Head>
            <title>Login</title>
        </Head>
        
        <div className="container">
            <div className="header">
                <h2>Login Page</h2>
            </div>
            <form method="POST" action="homepage">
            <div className="inputs">
                
                <label>Username : </label>
                <input type="text" name="username" ></input>
                <label>Password : </label>
                <input type="password" name="password"></input>
                <input type="submit" name="login" value="Login"></input>
            </div>
            <div className="other">
                <p>If you don't have account <a href="">Sign Up</a></p>
            </div>
            </form>
        </div>
        </>
    )
}

export default LoginPage;
