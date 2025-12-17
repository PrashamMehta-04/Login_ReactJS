import './Sharedc.css';

const Acc = ({ tab, setTab, children }) => {
  return (
    <div className="page">
      <div className="card">
        <div className="card-header">
          <h1>My Account</h1>
          <p>Welcome back!</p>
        </div>

        <div className="tabs">
          <div className={`tab-indicator ${tab}`}></div>

          <button
            className={`tab ${tab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`tab ${tab === "register" ? "active" : ""}`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
          <button
            className={`tab ${tab === "account" ? "active" : ""}`}
            onClick={() => setTab("account")}
          >
            Manage Account
          </button>
        </div>

        <div className="form">{children}</div>
      </div>
    </div>
  );
};

export default Acc;
