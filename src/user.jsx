import React from 'react'
import Axios from 'axios';

function Postform(){
const initialvalues = { username: "", password: "", address: "", email: "" };
  const [formvalues, setformvalues] = useState(initialvalues);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formvalues.username) {
      alert("username cannot be empty");
    }
    if (!formvalues.password) {
      alert("password cannot be empty");
    }
    if (formvalues.password.length < 8) {
      alert("password should have ateast 8 characters");
    }
  };
  let jsonObj = {
    username: formvalues.username,
    email: formvalues.email,
    address: formvalues.address,
    password: formvalues.password,
  };
  console.log(jsonObj);
  let myjsonstr = JSON.stringify(jsonObj);
  console.log(myjsonstr);

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
          <label>email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formvalues.email}
            onChange={handlechange}
          ></input>
        </div>
        <div>
          <label>address</label>
          <input
            type="address"
            name="address"
            placeholder="address"
            value={formvalues.address}
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
export default Postform;