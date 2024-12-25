import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="p-1 text-center w-[93%] absolute top-3"
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-3">Choose a Vehicle</h2>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-10"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png "
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
          <p className="font-medium text-xs">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹195.23</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberMoto{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>
          </h4>
          <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
          <p className="font-medium text-xs">Affordable, MotorCycle rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹76.06</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>6
            </span>
          </h4>
          <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
          <p className="font-medium text-xs">Affordable rides</p>
        </div>
        <h2 className="text-lg font-semibold">₹80.10</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;