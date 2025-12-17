import './Sharedc.css';

const Acc = ({ tab, setTab, children }) => {
  return (
    <div className="page">
      <div className="card">
        {/* Header */}
        <div className="card-header">
          <h1>My Account</h1>
          <p>Welcome back!</p>
        </div>

        {/* Tabs */}
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
        </div>

        {/* Page Content */}
        <div className="form">{children}</div>
      </div>
    </div>
  );
};

export default Acc;
