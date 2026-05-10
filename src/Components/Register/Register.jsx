import register from './Register.module.css'
import { useState, useContext } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { LoginContext } from '../../Context/LoginContext';

const itemsArr = ['Duties and Taxes Guaranteed', 'Free Express Shipping', 'Customer Love', 'Easy Returns', 'Secure Payment']

const Item = ({ information }) => {
    return (
        <>
            <div className={register['item-box']}>
                <IoMdCheckmark className={register['checkmark']} />
                <p>{information}</p>
            </div>
        </>
    )
}

export default function Register() {
    const {login, allProjects} = useContext(LoginContext)
    const [formDate, setFormDate] = useState({
        ConfirmPassword: '',
        Email: '',
        LastName: '',
        FirstName: '',
        Password: '',
        Checked: false
    })

        const defoltInformation = {
        ConfirmPassword: '',
            Email: '',
            LastName: '',
            FirstName: '',
            Password: '',
            Checked: false
    }

    const changeInformation = (e) => {
        const { name, value, type, checked } = e.target

        setFormDate(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const hundelSubmite = (event) => {
        event.preventDefault()

        setFormDate(defoltInformation)
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
        <>
            <div className={register['register-box']}>
                <a href="" className={register['new-register-link']}>Home / Create New Customer Account</a>
                <h1 className={register.title}>Create New Customer Account</h1>
                <div className={register['personal-forms']}>
                    <div className={register['personal-data-box']}>
                        <div className={register['persone-date']}>
                            <h4 className={register['date-title']}>Personal Information</h4>
                            <form onSubmit={hundelSubmite} className={register['name-form']} id='accontForm'>
                                <label className={register['date-name-input-box']}>
                                    <p className={formDate.FirstName.length < 1 && register.marker}>First name </p>
                                    <input className={register['name-input']} type="text" placeholder='First name' value={formDate.FirstName} name='FirstName' onChange={changeInformation} />
                                </label>
                                <label className={register['date-name-input-box']}>
                                    <p className={formDate.LastName.length < 1 && register.marker}>Last Name </p>
                                    <input className={register['name-input']} type="text" placeholder='Last Name' value={formDate.LastName} name='LastName' onChange={changeInformation} />
                                </label>
                                <label className={register['date-check-input-box']}>
                                    <input className={register['checkbox-input']} type="checkbox" name='Checked' value={formDate.Checked} checked={formDate.Checked} onChange={changeInformation} />
                                    <a href="">Sign Up for Newsletter</a>
                                </label>
                            </form>
                        </div>

                        <div className={register['account-date']}>
                            <h4 className={register['date-title']}>Sign Up for Newsletter</h4>
                            <form onSubmit={hundelSubmite} className={register['email-form']} id='accontForm'>
                                <label className={register['date-email-input-box']}>
                                    <p className={!emailPattern.test(formDate.Email) && register.marker}>Email </p>
                                    <input className={register['email-input']} type="email" placeholder='daisy.watson@example.com' name='Email' value={formDate.Email} onChange={changeInformation} />
                                </label>
                                <label className={register['date-email-password-input-box']}>
                                    <p className={formDate.Password.length < 5 && register.marker}>Password </p>
                                    <div className={register['password-control-box']}>
                                        <input className={register['password-input']} type="password" placeholder='Password  *' name='Password' value={formDate.Password} onChange={changeInformation} />
                                        <span style={formDate.Password.length < 5 ? { display: "flex" } : { display: "none" }}>Password Strength: No Password</span>
                                    </div>
                                </label>
                                <label className={register['date-email-input-box']}>
                                    <p className={formDate.ConfirmPassword != formDate.Password || formDate.ConfirmPassword.length < 5  ? register.marker : null}>Confirm Password </p>
                                    <input className={register['password-input']} type="password" name='ConfirmPassword' value={formDate.ConfirmPassword} onChange={changeInformation} />
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className={register['button-box']}>
                        <button onClick={() => login()} style={formDate.Password != formDate.ConfirmPassword || formDate.Password.length < 5 || formDate.FirstName.length < 1 || formDate.LastName.length < 1 || formDate.Checked != true || !emailPattern.test(formDate.Email) ? {pointerEvents: 'none'} : {pointerEvents: 'auto'}} className={register.creat} form='accontForm'>create an account</button>
                        <button onClick={() => allProjects()} className={register.back}>Back</button>
                    </div>
                </div>
            </div>
            <div className={register['items-box']}>
                {itemsArr.map((elem, index) => (<Item information={elem} key={index} />))}
            </div>
        </>
    )
}
