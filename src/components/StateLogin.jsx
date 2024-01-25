import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid =
    didEdit.email && !isEmail(credentials.email) && !isNotEmpty(credentials.email);
  const passwordIsInvalid = didEdit.password && !hasMinLength(credentials.password, 6);

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

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          value={credentials.email}
          onChange={(event) => handleCredentialsChange("email", event.target.value)}
          error={emailIsInvalid && "Please enter a valid email!"}
        />

        <Input
          label="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={(event) => handleCredentialsChange("password", event.target.value)}
          onBlur={() => handleInputBlur("password")}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
