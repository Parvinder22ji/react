import { useState } from "react";
import "./App.css";

function App() {
  const initialvalues = { username: "", password: "" };
  const [formvalues, setformvalues] = useState(initialvalues);
  const [formerrors, setformerrors] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setformerrors(validate(formvalues));
  };
  const validate = (values) => {};
  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <h1>login page</h1>
        <div>
          <label>username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formvalues.username}
            onChange={handlechange}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formvalues.password}
            onChange={handlechange}
          ></input>
        </div>
        <div>
          <button className="fluid ui button blue">submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
