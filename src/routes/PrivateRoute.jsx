import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation  } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return (
            <div className='w-full min-h-screen flex justify-center items-center flex-col'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;