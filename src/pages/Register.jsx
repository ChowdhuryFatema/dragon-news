import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password)

        setSuccess('');
        setRegisterError();

        if(password.length < 6){
            return setRegisterError('Password should be at least 6 character')
        }
        else if(!/[0-9]/.test(password)){
            return setRegisterError('Password must contain at least one Digit')
        }
        else if(!/[A-Z]/.test(password)){
            return setRegisterError('Password must have at least one uppercase Character')
        }
        else if(!/[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]/.test(password)){
            return setRegisterError('Password must contain at least one Special Symbol')
        }

        createUser(email, password)
        .then(result => {
            console.log(result);
            setSuccess('User Create Successfully')

            sendEmailVerification(result.user)
            .then(() => {
                alert('Please check your email and verify your account')
            })

            e.target.reset();
        })
        .catch(error => {
            setRegisterError(error.message);
        })
        
    }

    return (
        <div className="max-w-7xl mx-auto px-5">
            <Navbar></Navbar>
            <div className="flex flex-col justify-center min-h-[80vh] items-center my-5">
                <div className="flex flex-col w-full max-w-lg p-6 shadow rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border">
                    <div className="text-center">
                        <h1 className="my-3 text-2xl md:text-4xl font-bold">Register your account</h1>
                        <hr className="my-10"/>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-8">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm">Name </label>
                                <input type="text" name="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm">Photo URL </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm">Password</label>

                                </div>
                                <input type="password" name="password" placeholder="******" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />

                            </div>
                         

                            <div>
                                <input type="checkbox" />
                                <span className="ml-2">I agree the Terms and Conditions</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#403F3F] text-white dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                                <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600 font-semibold text-red-500"> Sign In</Link>.
                            </p>
                        </div>
                    </form>
                    {
                        success && <p className="text-green-500 text-lg text-center mt-2">{success}</p>
                    }
                    {
                        registerError && <p className="text-red-500 text-center mt-2 text-lg">{registerError}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;