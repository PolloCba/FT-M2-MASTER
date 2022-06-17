import React, { useState } from "react";

export default function Form() {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setInput((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      setErrors(validate(newState));

      return newState;
    });
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={input.username}
          className={errors.username && "danger"}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={input.password}
          className={errors.password && "danger"}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <div>
        <input
          type="submit"
          value="Submit"
          disabled={Object.keys(errors).length}
        />
      </div>
    </form>
  );
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
    console.log(errors);
  }
  return errors;
}
