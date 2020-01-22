import React from 'react';
import './Login.css';

class Login extends React.Component {
  state = {
    login: true
  };

  changeCustomerStatus = loginStatus => {
    this.setState({ login: loginStatus });
  };

  render() {
    return (
      <div className='logRegPageContainer'>
        <div className='logRegWrapper'>
          <div className='logRegHeader'>
            <div className='loginBoxHeader'>
              <h3 onClick={() => this.changeCustomerStatus(true)}>
                ALREADY REGISTERED
              </h3>
            </div>
            <div className='registerBoxHeader'>
              <h3 onClick={() => this.changeCustomerStatus(false)}>
                NEW TO HENNA
              </h3>
            </div>
          </div>
          {this.state.login ? (
            <div className='loginForm'>
              <form>
                <label>Username:</label>
                <input type='text' name='userName' />
                <label>Password: </label>
                <input type='password' name='password' />
                <label>Confirm Password:</label>
                <input type='password' name='password' />
                <input type='button' value='Login' className='logRegButton' />
              </form>
            </div>
          ) : (
            <div className='regForm'>
              <form>
                <label>First Name:</label>
                <input type='text' name='firstName' />
                <label>Last Name:</label>
                <input type='text' name='firstName' />
                <label>Username:</label>
                <input type='text' name='userName' />
                <label>Password: </label>
                <input type='password' name='password' />
                <label>Confirm Password:</label>
                <input type='password' name='password' />
                <input
                  type='button'
                  value='Register'
                  className='logRegButton'
                />
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Login;
