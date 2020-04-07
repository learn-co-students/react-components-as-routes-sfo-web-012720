import React from 'react';

const Login = () => 
      <form>
        <h1>Login</h1>
        <div>
          <input type="text" name="username" placeholder="username" />
          <label htmlFor="username">Username</label>
          </div>
          <div>
          <input htmlFor="password" name="password" placeholder="password" />
          <input type="submit" value="login"/>
        </div>
      </form>

export default Login;