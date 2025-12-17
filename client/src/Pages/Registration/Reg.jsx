const Registration = () => {
  return (
    <>
      <label>Full Name</label>
      <input type="text" placeholder="Your Name" />

      <label>Email Address</label>
      <input type="email" placeholder="you@example.com" />

      <label>Phone Number</label>
      <input type="text" placeholder="+91 1234567890" />

      <label>Password</label>
      <input type="password" placeholder="Enter Password" />

      <button className="primary-btn">Create Account</button>
    </>
  );
};

export default Registration;
