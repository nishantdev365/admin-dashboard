import { useState } from 'react';
import { Link } from 'react-router-dom';
import Signin from '../components/Signin';
import Register from '../components/Register';

const Login = () => {
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-200 h-screen">
        <div className="w-full md:w-2/5 bg-black text-white flex justify-center items-center h-screen mb-8">
          <p className="font-montserrat text-6xl font-bold leading-10 tracking-normal flex text-center">
            Board.
          </p>
        </div>
        <div className="w-full md:w-3/5 h-screen flex justify-center items-center pb-8">
          <div>
            <p className="text-center font-montserrat text-2xl font-bold leading-6 tracking-normal md:text-left">{isRegisterPage ? "Register" : "Sign In"}</p>
            <p className="text-center font-lato text-base font-normal leading-5 tracking-normal md:text-left my-2">{isRegisterPage ? "Please Fill your Details" : "sign in to your account"}</p>
            {isRegisterPage ? <Register /> : <Signin />}
            <p className="font-lato mt-10 text-center text-sm text-gray-500">
              {isRegisterPage ? "Already have an account" : "Do not have an account?"}{' '}
              <Link to="#" onClick={() => setIsRegisterPage(!isRegisterPage)}>
                <span className='text-blue-500'> {isRegisterPage ? "Sign In" : "Register here"} </span>
              </Link>
            </p> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
