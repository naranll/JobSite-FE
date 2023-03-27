import "../styles/login.css";
import { useNavigate } from "react-router-dom";

//1. Login хийхэд input утгуудыг авч console.log() хийх 
//2. Login-р сонгосон хэрэглэгчийн (appplicant/employer) нүүр хуудас руу үсрэх 

export default function Login({setUserType}) {
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();

        const userInput = {
            username: e.target.username.value,
            password: e.target.userpass.value,
        }
        console.log("user input: ", userInput);
        navigate("/applicant");
    }

    //get input values of username & userpass
    const employerLoginHandler = () =>{
        console.log("employerLoginHandler");
        navigate("/employer");
    }

    return <div className="login-page">
        <form className="login-form" onSubmit={submitHandler}>
            <fieldset>
                <legend>Login</legend>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required />

                <label htmlFor="userpass">Password</label>
                <input type="password" name="userpass" id="userpass" required />

                <div className="form-buttons">
                    <button className="form-btn login-btn">Login as Applicant</button>
                    <input type="button" value="Login as Employer" name="employerLogin" onClick={employerLoginHandler} className="form-btn login-btn" />
                    <input type="button" value="Register" className="form-btn register-btn" onClick={()=> navigate('/register')}/>
                </div>
            </fieldset>
        </form>
    </div>
}