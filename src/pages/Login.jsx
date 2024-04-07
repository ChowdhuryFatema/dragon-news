import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.confige";


const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [logInError, setLogInError] = useState('');
    const emailRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess('');
        setLogInError('');

        signInUser(email, password)
        .then(() => {
            navigate(location?.state ? location.state : '/')

            setSuccess('User Login Successfully')
            e.target.reset();
        })
        .catch(error => {
            setLogInError(error.message);
        })
        
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;

        if(!email){
            return alert('Please Provide an Email')
        }

        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Please Check Your Email')
        })
        .catch(error => {
            setLogInError(error.message);
        })

    }


    return (
        <div className="max-w-7xl mx-auto px-5">
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center min-h-[80vh]">
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                    <h2 className="mb-3 text-2xl md:text-3xl font-semibold text-center">Login your account</h2>

                    <hr className="my-10" />
                    <form onSubmit={handleLogin} className="space-y-8">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="block text-sm">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    ref={emailRef}
                                    placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label className="text-sm">Password</label>
                                    <a onClick={handleForgetPassword} rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 bg-[#403F3F] text-white">Sign in</button>
                        <p className="text-sm text-center dark:text-gray-600">Dont have account?
                            <Link to='/register' href="#" rel="noopener noreferrer" className="focus:underline hover:underline text-red-500"> Sign up here</Link>
                        </p>
                    </form>
                    {
                        success && <p className="text-green-500 text-lg text-center mt-2">{success}</p>
                    }
                    {
                        logInError && <p className="text-red-500 text-center mt-2 text-lg">{logInError}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;