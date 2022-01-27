import Login from './Login.js';
import Create from './Create.js';
import { useState } from 'react';

function Account({setUser}) {

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

     return (
         <div>
         <Login />
         <h1>Manage Account</h1>
         <Create />
         <h3>Update Password</h3>
         <form 
    // onSubmit={handleUpdate}
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
      <button type="submit" className="Button">YES, DELETE MY ACCOUNT!</button>
         </div>
    );

}

export default Account;
