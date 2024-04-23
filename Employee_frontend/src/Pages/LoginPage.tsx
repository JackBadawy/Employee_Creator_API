const LoginPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("pressed submit");
  };

  return (
    <div className="login__outer-container">
      <div className="login__login_box">
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__username-container">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="login__password-container">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>
          <div className="login_btn-container">
            <button type="submit" className="login__submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
