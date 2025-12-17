const Login = () => {
  return (
    <>
      <label>Email Address</label>
      <input type="email" placeholder="you@example.com" />

      <label>Password</label>
      <input type="password" placeholder="Enter Password" />

      <button className="primary-btn">Sign In</button>
    </>
  );
};

export default Login;
