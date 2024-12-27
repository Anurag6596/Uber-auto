import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {

  const [otp, setOtp] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
  }


  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-3"
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-3">
        Confirm this Ride to Start
      </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689708385255-fe5ee98674ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Dubey</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM away</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Behind Patel Lawns, Saoner
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Behind Patel Lawns, Saoner
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-wallet-3-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹199.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <input value={otp} onChange={(e)=> setOtp(e.target.value)} className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5" type="text" placeholder="Enter OTP"/>
          <Link
            to="/captain-riding"
            className="w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Confirm
          </Link>

          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(false);
              props.setRidePopupPanel(false);
            }}
            className="w-full mt-2 bg-red-500 text-white-500 font-semibold p-3 rounded-lg"
          >
            Cancel
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
