import Login from './Login.js';
import Signup from './Signup.js';
import { useState } from 'react';

function Account({setUser, onLogin}) {

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

//THIS FUNCTION IS PROBABLY NOT CORRECT
  function handleUpdate(e) {
     e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

  function handleDelete() {
    //  e.preventDefault();
    fetch("/me", { 
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
    },
  }).then((r) => r.json())
      // .then(onLogin);
  }

     return (
         <div>
         <Login setUser={setUser}/>
         <h1>Manage Account</h1>
         <Signup />
         <h3>Update Password</h3>
         <form 
    onSubmit={handleUpdate}
    >
      <br/>
      <label>Password</label>
      <input
        type="text"
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
      <button type="submit" className="Button">Update</button>
    </form>
      <h3>My Sales</h3>
      <div><p>Figure out how to list a users sales here!</p></div>
      <h3>Delete Account</h3>
      <button type="submit" className="Button" 
      onClick={handleDelete}
      >YES, DELETE MY ACCOUNT!</button>
         </div>
    );

}

export default Account;
