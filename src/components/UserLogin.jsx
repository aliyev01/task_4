import React from "react";
import propTypes from "prop-types";
const UserLogin = () => {
  const [isFocusEmail, setIsFocusEmail] = React.useState(false);
  const [isFocusPass, setIsFocusPass] = React.useState(false);
  return (
    <div className="form-container">
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onFocus={() => setIsFocusEmail(true)}
          onBlur={() => setIsFocusEmail(false)}
        />
        {isFocusEmail && <span>Yalnız .ru domenlərinə icazə verilir.</span>}
        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          id="password"
          onFocus={() => setIsFocusPass(true)}
          onBlur={() => setIsFocusPass(false)}
        />
        {isFocusPass && <span>Ən azı 8 simvol</span>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

UserLogin.propTypes = {
  email: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
};

export default UserLogin;
