import { useState } from 'react';

function Signup({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

    function handleCreate(e) {
     e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => r.json())
      .then(onLogin);
  }

     return (
         <div>
            <h3>Create an account!</h3>
    <form 
    onSubmit={handleCreate}
    >
      <label>Email Address</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <label>Password</label>
       <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
       <label>Confirm Password</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <br/>
      {/* <button type="submit" className="Button">Submit</button> */}
       <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
    </form>
         </div>
    );

}

export default Signup;