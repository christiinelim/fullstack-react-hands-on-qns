import React, {useState} from 'react'

export default function RegisterForm() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === "username") {
        setUsername(value);
        (userName.length < 4 || userName.length > 10) ? setUsernameError(true) : setUsernameError(false);
      } else if (name === "email") {
        setEmail(value);
        email.includes("@") ? setEmailError(false) : setEmailError(true)
      } else if (name === "password") {
        setPassword(value);
        setPasswordError(!validatePassword(value));
      }
    }

    const validatePassword = (password) => {
      const specialCharsRegex = /[!@#$%^&*]/;
      return specialCharsRegex.test(password);
    };

    return (
      <React.Fragment>
        <div>
            <label>Username:</label>
            <input type="text" name="username" value={userName} onChange={handleInputChange}/>
            {usernameError && <span class="error">Username must be between 4 to 10 characters long</span>}
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email" value={email} onChange={handleInputChange}/>
            {emailError && <span class="error">Email address must contain @</span>}
        </div>
        <div>
            <label>Password:</label>
            <input type="text" name="password" value={password} onChange={handleInputChange}/>
            {passwordError && <span class="error">Password must have at least one special character (!, @, #, $, %, ^, & or *) and must have at least one digit, and one alphabet</span>}
        </div>
      </React.Fragment>
    )
}