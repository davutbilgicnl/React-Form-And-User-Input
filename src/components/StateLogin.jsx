import { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const emailIsInvalid = credentials.email !== "" && !credentials.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(typeof credentials.email, "- email: " + credentials.email);
    console.log(typeof credentials.password, "- password: " + credentials.password);
    console.log(typeof credentials, credentials);
  }

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
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
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
