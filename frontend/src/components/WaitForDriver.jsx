import React from "react";

const WaitForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriverr(false);
        }}
        className="p-1 text-center w-[93%] absolute top-3">
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>

        <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""/>
          <div className="text-right">
            <h2 className="text-lg font-medium">Aditya</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb1">MH40 CF 1234</h4>
            <p className="font-sm text-gray-600">Maruti Suzuki Swift</p>
          </div>
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
      </div>
    </div>
  );
};

export default WaitForDriver;
