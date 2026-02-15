import { Component } from 'react';
import styles from './loginPage.module.css';
import clsx from 'clsx';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Benefits from './Benefits';
import Container from '../Container';

class LoginMain extends Component {
  state = {
    email: '',
    password: '',
    agree: false,
    errors: {},
  };
  handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };
  handleSubmit = (event) => {
    const { email, password, agree } = this.state;
    const errors = {};
    event.preventDefault();
    if (!email) {
      errors.email = 'This is a required field';
    }
    if (!password) {
      errors.password = 'This is a required field';
    } else if (password.length <= 3) {
      errors.password = 'Password must contain more than 3 letters';
    }
    if (!agree) {
      errors.agree = 'This is a required field';
    }
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', { email, password, agree });
      this.setState({
        email: '',
        password: '',
        agree: false
      })
    }
  };
  render() {
    return (
      <>
        <Header />
        <main className={clsx(styles.main)}>
          <section className={styles.loginPage}>
            <Container className={clsx(styles.loginPageContent)}>
              <ul className={clsx(styles.navBarLinks)}>
                <li className={clsx(styles.navBarItem)}>
                  <a href="#" className={clsx(styles.navBarItemLink)}>
                    Home
                  </a>
                </li>
                <li className={clsx(styles.navBarItem)}>
                  <a href="#" className={clsx(styles.navBarItemLink)}>
                    Sign in
                  </a>
                </li>
              </ul>
              <h1 className={clsx(styles.loginTitle)}>LOGIN YOUR ACCOUNT</h1>
              <form onSubmit={this.handleSubmit} className={clsx(styles.formContent)}>
                <div className={clsx(styles.formField)}>
                  <label htmlFor="emailField" className={clsx(styles.formFieldLabel)}>
                    Email <span className={clsx(styles.formFieldStar)}>*</span>{' '}
                  </label>
                  {this.state.errors.email ? (
                    <div className={clsx(styles.formFieldError)}>
                      <input
                        type="email"
                        id="emailField"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className={clsx(styles.formFieldInput, styles.formFieldInputError)}
                        placeholder="Email"
                      />
                      <p className={clsx(styles.errorText)}>{this.state.errors.email}</p>
                    </div>
                  ) : (
                    <input
                      type="email"
                      id="emailField"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className={clsx(styles.formFieldInput)}
                      placeholder="Email"
                    />
                  )}
                </div>
                <div className={clsx(styles.formField)}>
                  <label htmlFor="passwordField" className={clsx(styles.formFieldLabel)}>
                    Password <span className={clsx(styles.formFieldStar)}>*</span>
                  </label>
                  {this.state.errors.password ? (
                    <div className={clsx(styles.formFieldError)}>
                      <input
                        type="password"
                        id="passwordField"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className={clsx(styles.formFieldInput, styles.formFieldInputError)}
                        placeholder="Password"
                      />
                      <p className={clsx(styles.errorText)}>{this.state.errors.password}</p>
                    </div>
                  ) : (
                    <input
                      type="password"
                      id="passwordField"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className={clsx(styles.formFieldInput)}
                      placeholder="Password"
                    />
                  )}
                </div>
                <div className={clsx(styles.formCheckbox, styles.formField)}>
                  {this.state.errors.agree ? (
                    <div className={clsx(styles.formCheckboxError)}>
                      <input
                        type="checkbox"
                        id="checkboxId"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleChange}
                        className={clsx(styles.formCheckboxInput, styles.formCheckboxInputError)}
                      />
                      <label htmlFor="checkboxId" className={clsx(styles.formCheckboxLabel, styles.formCheckboxLabelError)}>
                        By using this form you agree with the storage and handling of your data by
                        this website.
                      </label>
                    </div>
                  ) : (
                    <>
                      <input
                        type="checkbox"
                        id="checkboxId"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleChange}
                        className={clsx(styles.formCheckboxInput)}
                      />
                      <label htmlFor="checkboxId" className={clsx(styles.formCheckboxLabel)}>
                        By using this form you agree with the storage and handling of your data by
                        this website.
                      </label>
                    </>
                  )}
                </div>
                <div className={clsx(styles.formBtns)}>
                <button type="submit" className={clsx(styles.formBtnSubmit)}>SIGN IN</button>
                <a href="#" className={clsx(styles.formBtnLink)}>CREATE AN ACCOUNT</a>
                </div>
              </form>
            </Container>
          </section>
          <Benefits />
        </main>
        <Footer />
      </>
    );
  }
}

export default LoginMain;
