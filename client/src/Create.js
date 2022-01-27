import { useState } from 'react';

function Create({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    function handleCreate(e) {
     e.preventDefault();
    setErrors([]);
    setIsLoading(true);
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
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
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
        type="text"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <br/>
       <label>Confirm Password</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
      />
      <br/>
      {/* <button type="submit" className="Button">Submit</button> */}
       <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        {/* <form>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </form> */}
    </form>
         </div>
    );

}

export default Create;