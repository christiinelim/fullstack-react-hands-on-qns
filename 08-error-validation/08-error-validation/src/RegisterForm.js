import React, {useState} from 'react'

export default function RegisterForm() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === "username") {
        setUsername(value);
      } else if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    }

    const usernameError = () => {
      if (userName.length < 4 || userName.length > 10) {
        return "block"
      } else {
        return "none"
      }
    }

    return (
      <React.Fragment>
        <div>
            <label>Username:</label>
            <input type="text" name="username" value={userName} onChange={handleInputChange}/>
            <span class="error" style={{
              "display": {usernameError}
            }}>Username must be between 4 to 10 characters long</span>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" value={email} onChange={handleInputChange}/>
            <span class="error" style={{
              "display": {usernameError}
            }}>Email address must contain @</span>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" name="password" value={password} onChange={handleInputChange}/>
            <span class="error" style={{
              "display": {usernameError}
            }}>Password must have at least one special character (!, @, #, $, %, ^, & or *) and must have at least one digit, and one alphabet</span>
        </div>
      </React.Fragment>
    )
}