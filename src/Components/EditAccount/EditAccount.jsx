import { Component } from "react";
import './EditAccount.css'

class EditAccount extends Component  {
        state = {
        name: '',
        lastname: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        
    }


    render() {
        const { name, lastname } = this.state;

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
                        <input type="text"name="lastname"value={lastname}onChange={this.handleChange} />
                    </label>
                </div>

                <div className="checkbox-group">
                    <label>
                        <input type="checkbox" />
                        Change Email
                    </label>

                    <label>
                        <input type="checkbox" />
                        Change Password
                    </label>
                </div>

                <button type="submit" className="save-btn">SAVE</button>
            </form>

        );
    }
}

export default EditAccount;