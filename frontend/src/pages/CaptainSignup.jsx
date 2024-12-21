import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {

    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setuserData] = useState({})



  const SubmitHandler = (e)=>{
    e.preventDefault()
    setuserData({
      fullName:{
        firstName:firstName,
        lastName:lastName,
      },
      password:password,
      email:email
    })
    // console.log(userData);
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
          <div>
            <img
              className="w-20 mb-3"
              src="https://www.svgrepo.com/show/505031/uber-driver.svg"
              alt=""
            />
            <form
              onSubmit={(e) => {
                SubmitHandler(e);
              }}>
              <h3 className="text-lg font-medium w-full mb-2">What&apos;s our Captain&apos;s name</h3>
              <div className="flex gap-4 mb-6">
                <input
                  required
                  className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
                  type="text"
                  placeholder="Your firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              {/* <h3 className="text-lg font-medium mb-2">What&apos;s your lastname</h3> */}
                <input
                  required
                  className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
                  type="text"
                  placeholder="Your lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
    
              <h3 className="text-lg font-mediun mb-2">What&apos;s our Captain&apos;s email</h3>
              <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email"
                placeholder="email@xyz.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className="text-lg font-medium mb-2">Enter Password</h3>
              <input
                required
                className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
              />
    
              <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
                Login
              </button>
    
              <p className="text-center">
                Already gave a account?
                <Link to="/captainlogin" className="text-blue-600">
                  Login here
                </Link>
              </p>
            </form>
          </div>
          <div>
            <p className="text-[10px] leading-tight">This site id protected by reCAPTCHA and the <span className="underline">Google Policy</span> Terms of Service apply.</p>
          </div>
        </div>
  )
}

export default CaptainSignup