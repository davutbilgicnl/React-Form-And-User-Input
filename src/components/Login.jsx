import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(typeof credentials.email, "- email: " + credentials.email);
    console.log(typeof credentials.password, "- password: " + credentials.password);
    console.log(typeof credentials, credentials);
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  //more generic versetile
  function handleCredentialsChange(identifier, value) {
    setCredentials((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={(event) => handleCredentialsChange("email", event.target.value)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={(event) => handleCredentialsChange("password", event.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
