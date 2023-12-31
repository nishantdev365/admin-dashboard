import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
// console.log(name, email, password);

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(signInWithEmailAndPassword(auth, email, password).then(updateProfile(auth.currentUser, {displayName: name}))).catch((error) => {
     alert(error)
     });
  }

  return (
    <>
    
    <div className="flex min-h-full w-screen md:w-96 flex-1 flex-col justify-center px-2 py-2 lg:px-8 bg-white rounded-xl">
        <div className="mt-2 mb-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="email" className="font-lato block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  name="name"
                 type="name"
                  value={name}
                  autoComplete="name"
                  required
                  className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="font-lato block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="font-lato block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
            
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  required
                  className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm">
                  <a href="#" className="font-lato font-semibold text-blue-500 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>

            <div>
              <button
                type="submit"
                onClick={handleRegister}
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

   </>
  )
}

export default Register