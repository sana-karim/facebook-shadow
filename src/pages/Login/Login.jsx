import "./Login.css"
import { assets } from "../../utils/imports";
import { useState } from "react";
import { Footer } from "../../components/Footer";
import { SignUp } from "../SignUp/SignUp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database"



export const Login = ({ handleNavigations }) => {

    const [isPassVisible, setIsPassVisible] = useState(false);
    const [inputEmail, setInputEmail] = useState(null);
    const [inputPass, setInputPass] = useState(null);
    const [isSignUpCompVisible, setIsSignUpCompVisible] = useState(false);

    const auth = getAuth(app);
    const database = getDatabase()
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        e.target.name === "email"
            ?
            setInputEmail(e.target.value)
            :
            setInputPass(e.target.value)
    }

    const handleSignUpWindow = () => {
        setIsSignUpCompVisible(!isSignUpCompVisible);
    }

    const getCurrentTimestamp = () => {
        return Date.now();
    }

    const updateLoginInfo = (uid) => {
        set(ref(database, `users/${uid}/lastSignIn`), getCurrentTimestamp());
    }

    const handleOnLogin = () => {
        signInWithEmailAndPassword(auth, inputEmail, inputPass).then((value) => {
            alert("success");
            /* set login success Toast */
            updateLoginInfo(value.user.uid);
            localStorage.setItem("loggedInUser", value.user.uid);
            handleNavigations(true);
            navigate("/");
        }).catch((error) => {
            /* Handle Login Failed Error */
            /* set login failed toast */
            console.log(error)
            alert("failed", error);
        })
    }

    return (
        <>
            {isSignUpCompVisible && <SignUp signUpCloseCallback={handleSignUpWindow} isCloseBtnVisible={true} />}
            <div className="login-container">
                <div className="login-sub-container">
                    <div className="login-sub-container-left">
                        <img src={assets.blockFbLogo} alt="block fb logo" />
                        <p>Facebook helps you connect and share with the people in your life.</p>
                    </div>
                    <div className="login-sub-container-right">
                        <div className="login-form-container">
                            <div className="login-from-container-top">
                                <input type="text" name="email" onChange={handleOnChange} className="input-field focus-border" placeholder="Email address or phone number" />
                                <div className="password-field-container focus-border">
                                    <input type={isPassVisible ? "text" : "password"} name="password" onChange={handleOnChange} className="input-field" placeholder="Password" />
                                    {inputPass && <img className="visibility-icn" onClick={() => setIsPassVisible(!isPassVisible)} src={isPassVisible ? assets.invisible_icn : assets.visible_icn} alt="visibility icon" />}
                                </div>
                                <input type="button" onClick={handleOnLogin} className="login-btn" value="Log in" />
                                <div className="forgot-pass-btn">Forgotten password?</div>
                            </div>
                            <div className="login-from-container-bottom">
                                <input type="button" onClick={handleSignUpWindow} className="create-account-btn" value="Create new account" />
                            </div>
                        </div>
                        <div className="celebrity-signup"> <span>Create a page</span> for a celebrity, brand or business</div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}