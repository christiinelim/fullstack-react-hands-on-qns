import { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const verifyLogin = () => {
        if (username == "rotiprataguy" && password == "rotiprata123"){
            alert("Login success")
        } else {
            alert("Invalid login")
        }
    }

    return (
        <div>
            <form>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>

                <label>Password</label>
                <input type="text" name="password" value={password} onChange={handlePasswordChange}/>

                <input type="submit" value="Login" onClick={verifyLogin}/>
            </form>
        </div>
    )
}

export default LoginForm;