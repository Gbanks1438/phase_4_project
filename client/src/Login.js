import { useState } from 'react';

function Login({ onLogin, onLogout }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

      function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

      function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

      ////V2
  //   function handleLogoutClick() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  // }

  return (
    <div className="Login">
    <h3>Already have an account?</h3>
    <form onSubmit={handleSubmit}>
    <label>Email Address</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
       <label>Password</label>
         <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      {/* <button type="submit" className="Button">Login</button> */}
      <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
        <form>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </form>
    </form>
    <br/>
      <button onClick={handleLogout} className="Button">Logout</button>
    </div>
  );
}

export default Login;