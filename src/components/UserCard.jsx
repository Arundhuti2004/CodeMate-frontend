import React from 'react'
import { useDispatch } from 'react-redux';

const UserCard = ({user}) => {
    const {firstName , lastName , photoUrl , age , gender , about , skills }  = user;
    const dispatch = useDispatch();
  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-cyan-900 relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Optional background layer */}
      <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/958259766/photo/robot-with-education-hud.jpg?s=2048x2048&w=is&k=20&c=wyk_jC-bIzo7eYnkZIxiXwFfFR7C9N5zdhFts0FY5HM=')] bg-cover bg-center opacity-20 z-0"></div>

      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 text-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4 "onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your Email"
              className="input input-bordered w-full bg-white/10 placeholder-white text-white"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your Password"
              className="input input-bordered w-full bg-white/10 placeholder-white text-white"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="flex justify-between text-sm items-center">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>
            <a href="#" className="link text-white/80 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full" >
            Login
          </button>

          {/* Register Link */}
          <p className="text-sm text-center mt-2">
            <a className="link font-semibold">Don’t have an account?</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default UserCard
