import './App.css';
import RegistrationForm from './Form'

function App() {

  const { nombre, emails, passwords, name, password, email} = RegistrationForm();
  const handleReload = () => {
    window.location.reload();
  };


  return (
<div className="form">
  <h2 className="title">Registration Form</h2>
  <label className="label">
    Name:
    <input
      className="input"
      type="text"
      value={name}
      onChange={nombre}
    />
  </label>
  <label className="label">
    E-mail:
    <input
      className="input"
      type="email"
      value={email}
      onChange={emails}
    />
  </label>
  <label className="label">
    Password:
    <input
      className="input"
      type="password"
      value={password}
      onChange={passwords}
    />
  </label>
  <button className="button" type="submit" onClick={handleReload}>
    Register
  </button>
  <div className="result">
    <p>Name: {name}</p>
    <p>E-mail: {email}</p>
    <p>Password: {password}</p>
  </div>
</div>
);
};

export default App;
