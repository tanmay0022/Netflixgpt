import React, { useState } from 'react';
import netflixLogo from '../assets/netlixx.png';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="relative h-screen w-screen">
        <div>
            <img src={netflixLogo} alt="Netflix Logo" 
            className='absolute left-4 top-2 w-28 z-10 scale-1.5'/>
        </div>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
          className="h-full w-full object-cover brightness-50"
        />
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-black bg-opacity-80 p-12 text-white">
          <h1 className="mb-8 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
           {!isSignInForm &&  <div>
              <input
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded bg-gray-700 p-4 text-white"
                required
              />
            </div>}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded bg-gray-700 p-4 text-white"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded bg-gray-700 p-4 text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-red-600 p-4 text-white hover:bg-red-700"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="mt-4 text-gray-400">
            <p>
              {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
              <span
                onClick={toggleSignInForm}
                className="cursor-pointer text-white hover:underline"
              >
                {isSignInForm ? "Sign up now" : "Sign in now"}
              </span>
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;