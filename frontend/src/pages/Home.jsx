import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding:24
          // opacity:1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding:0
          // opacity:0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );


  useGSAP(function () {
    if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(vehiclePanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ vehiclePanelOpen ])


  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* temporary image  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div> 
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setpanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel setpanelOpen={setpanelOpen} setVehiclePanel={setVehiclePanelOpen }  />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14">
      <h5 onClick={()=>{
        setVehiclePanelOpen(false)
      }} className="p-1 text-center w-[93%] absolute top-3"><i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h2 className="text-2xl font-semibold mb-3">Choose a Vehicle</h2>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img className="h-10" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png " alt="" />
            <div className=" ml-2 w-1/2">
              <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
              <p className="font-medium text-xs">Affordable, compact rides</p>
            </div>
            <h2 className="text-lg font-semibold">₹195.23</h2>
        </div>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className=" ml-2 w-1/2">
              <h4 className="font-medium text-base">UberMoto <span><i className="ri-user-3-fill"></i></span></h4>
              <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
              <p className="font-medium text-xs">Affordable, MotorCycle rides</p>
            </div>
            <h2 className="text-lg font-semibold">₹76.06</h2>
        </div>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
            <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className=" ml-2 w-1/2">
              <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-3-fill"></i>6</span></h4>
              <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
              <p className="font-medium text-xs">Affordable rides</p>
            </div>
            <h2 className="text-lg font-semibold">₹80.10</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
