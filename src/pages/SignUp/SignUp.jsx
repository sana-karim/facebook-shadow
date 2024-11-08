import { useState } from 'react'
import { assets } from '../../utils/imports'
import './SignUp.css'
import { DateOfBirthDropdown } from '../../components/DateOfBirthDropdown';
import { GenderRadio } from '../../components/GenderRadio';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../utils/firebase";

import { getDatabase, set, ref } from "firebase/database"


export const SignUp = ({ signUpCloseCallback, isCloseBtnVisible }) => {

    const [fNameInput, setFNameInput] = useState("");
    const [sNameInput, setSNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [dobInput, setDobInput] = useState({ day: "", month: "", year: "" });
    const [genderInput, setGenderInput] = useState("");

    const auth = getAuth(app);
    const database = getDatabase(app);

    const handleDobOnChangeCallback = (e) => {
        if (e.target.name === "day") {
            let dob = { ...dobInput }
            dob.day = e.target.value;
            setDobInput(dob);
        } else if (e.target.name === "month") {
            let dob = { ...dobInput }
            dob.month = e.target.value;
            setDobInput(dob);
        } else if (e.target.name === "year") {
            let dob = { ...dobInput }
            dob.year = e.target.value;
            setDobInput(dob);
        }
    }

    const handleOnGenderSelectCallback = (gender) => {
        setGenderInput(gender);
    }

    const handleOnChange = (e) => {
        if (e.target.name === "fname") {
            setFNameInput(e.target.value);
        } else if (e.target.name === "surname") {
            setSNameInput(e.target.value);
        } else if (e.target.name === "email") {
            setEmailInput(e.target.value);
        } else if (e.target.name === "password") {
            setPassInput(e.target.value);
        }
    }

    const handleSignUpClose = () => {
        signUpCloseCallback()
    }

    const getTimestamp = () => {
        return new Date().getTime();
    }

    const getUserRequestBody = (userUid) => {
        const user = {
            id: userUid,
            fName: fNameInput,
            sName: sNameInput,
            email: emailInput,
            gender: genderInput,
            signupTimestamp: getTimestamp(),
            lastSignIn: null,
            dob: {
                day: dobInput.day,
                month: dobInput.month,
                year: dobInput.year
            }
        }
        return user;
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, emailInput, passInput).then((value) => {
            const userRequestBody = getUserRequestBody(value.user.uid);
            set(ref(database, `users/${value.user.uid}`), userRequestBody);
            handleSignUpClose();
        });
    }

    return (
        <div className='parent-container'>
            <div className='signup-container'>
                <div className="signup-container-header">
                    <div className="signup-container-header-left">
                        <h1 className="header">Sign Up</h1>
                        <div className="sub-header">It's quick and easy.</div>
                    </div>
                    {isCloseBtnVisible && <div className="signup-container-header-right"><img src={assets.close_icn} onClick={handleSignUpClose} className='close-icn' alt="close icon" /></div>}
                </div>

                <div className="signup-container-form">
                    <div className="signup-sub-container-form-input">
                        <div className="form-input-firstname-surname">
                            <input type="text" onChange={handleOnChange} value={fNameInput} name="fname" placeholder='First name' className='signup-input-field fname-sname-input-width' />
                            <input type="text" onChange={handleOnChange} value={sNameInput} name="surname" placeholder='Surname' className='signup-input-field fname-sname-input-width' />
                        </div>
                        <div className='form-input-emailmobile-pass-dropdown-radiobtn'>
                            <input type="text" onChange={handleOnChange} value={emailInput} name="email" placeholder='Mobile number or email address' className='signup-input-field' />
                            <input type="password" onChange={handleOnChange} value={passInput} name="password" placeholder='New password' className='signup-input-field' />
                            <div className="dob-gender-header"> Date of birth</div>
                            <DateOfBirthDropdown handleDobOnChange={handleDobOnChangeCallback} dateOfBirth={dobInput} />
                            <div className='dob-gender-header'>Gender</div>
                            <GenderRadio handleOnGenderSelect={handleOnGenderSelectCallback} />
                        </div>
                    </div>
                    <div className="signup-sub-container-form-btn">
                        <p className='contact-info-terms'>
                            People who use our service may have uploaded your contact information to Facebook.
                            <span className='learn-more'> Learn More</span>
                        </p>
                        <p className='terms-condition'>
                            By clicking Sign Up, you agree to our
                            <span className='terms-policy-link'> Terms</span>,
                            <span className='terms-policy-link'>Privacy Policy</span>
                            and
                            <span className='terms-policy-link'> Cookies Policy</span>.
                            You may receive SMS notifications from us and can opt out any time.
                        </p>
                        <div className='signup-btn-container'>
                            <input type="button" onClick={handleSignUp} value="Sign Up" className='signup-btn' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
