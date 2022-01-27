import Navbar from './Navbar.js';
import { useState } from 'react';

function Login({ onLogin, onLogout }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username }),
  //   })
  //     .then((r) => r.json())
  //     .then((user) => onLogin(user));
  // }

    function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
  }

    function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div className="Login">
    <h3>Already have an account?</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value=
        {username}
        onChange={(e) => setUsername(e.target.value)}
      />
         <input
        type="text"
        value=
        {password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="Button">Login</button>
    </form>
      <button onClick={handleLogout} className="Button">Logout</button>
    <h3>Create an account!</h3>
    <form 
    // onSubmit={handleCreate}
    >
      <input
        type="text"
        value="First Name"
        // {firstName}
        // onChange={(e) => setFirstName(e.target.value)}
      />
       <input
        type="text"
        value="Last Name"
        // {lastName}
        // onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        value="Email Address"
        // {username}
        // onChange={(e) => setUsername(e.target.value)}
      />
       <input
        type="text"
        value="Password"
        // {password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="Button">Submit</button>
    </form>
      <h2>Account Management:</h2>
      <h3>Update Password</h3>
           <form 
    // onSubmit={handleUpdate}
    >
      <input
        type="text"
        value="New Password"
        // {password}
        // onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="Button">Update</button>
    </form>
      <h3>My Sales</h3>
      <div><p>Figure out how to list a users sales here!</p></div>
      <h3>Delete Account</h3>
      <button type="submit" className="Button">YES, DELETE MY ACCOUNT!</button>
    </div>
  );
}

export default Login;