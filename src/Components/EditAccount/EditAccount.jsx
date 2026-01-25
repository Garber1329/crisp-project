import { Component } from "react";
import './EditAccount.css'

class EditAccount extends Component  {
        state = {
        name: '',
        lastname: '',
        changeEmail: false,
        changePassword: false,
        email: "",
        password: ""
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        
    };
    handleCheckbox = (event) => {
        const { name, checked } = event.target;
        this.setState({ [name]: checked });
    };



    render() {
        const { name, lastname, changeEmail, changePassword, email, password } = this.state;

        return (
            <form className="account-form" onSubmit={this.handleSubmit}>
                <h1>Account Information</h1>

                <div className="form-group">
                    <label>
                        First name <span>*</span>
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Last name <span>*</span>
                        <input type="text"name="lastname" value={lastname}onChange={this.handleChange} />
                    </label>
                </div>

                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" name="changeEmail" checked={changeEmail} onChange={this.handleCheckbox} />
                        Change Email
                    </label>
                    {this.state.changeEmail && (
                        <div className="form-group">
                            <label>
                                New Email
                                <input type="email" name="email" value={email} onChange={this.handleChange} />
                            </label>
                        </div>
                    )}

                    <label>
                        <input type="checkbox" name="changePassword" checked={changePassword} onChange={this.handleCheckbox} />
                        Change Password
                    </label>
                    {this.state.changePassword && (
                        <div className="form-group">
                            <label>
                                New Password
                                <input type="password" name="password" value={password} onChange={this.handleChange} />
                            </label>
                        </div>
                    )}
                </div>

                <button type="submit" className="save-btn">SAVE</button>
            </form>

        );
    }
}

export default EditAccount;