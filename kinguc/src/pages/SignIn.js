import { useState } from "react";
import { SignInUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ magicEmail: "", password: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ magicEmail: "", password: "" });
    props.setUser(payload);
    props.toggleAuthenticated(true);
    navigate("/castles");
  };

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="magicEmail">Magic Email</label>
            <input
              onChange={handleChange}
              name="magicEmail"
              type="email"
              placeholder="example@example.com"
              value={formValues.magicEmail}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.magicEmail || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;