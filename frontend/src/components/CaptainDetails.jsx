import React from 'react'

const CaptainDetails = () => {
  return (
    <div><div className="flex  items-center justify-between">
    <div className="flex  items-center justify-start gap-3">
      <img className="h-10 w-10 rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
      <h4 className="text-lg font-medium ">Aditya Yelkar</h4>
    </div>
    <div>
      <h4 className="text-xl font-semibold">₹250.69</h4>
      <p className="text-sm text-gray-600">Earned</p>
    </div>
  </div>
  <div className="flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-4 items-start">
    <div className="text-center ">
      <i className="text-3xl mb-2  font-thin ri-timer-2-line"></i>
      <h5 className="text-lg font-medium">10.2</h5>
      <p className="text-sm text-gray-600">Hours Online</p>
    </div>
    <div className="text-center ">
      <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
      <h5 className="text-lg font-medium">60</h5>
      <p className="text-sm text-gray-600">Speed</p>
    </div>
    <div className="text-center ">
      <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
      <h5 className="text-lg font-medium">12.5</h5>
      <p className="text-sm text-gray-600">Hours Online</p>
    </div>
  </div></div>
  )
}

export default CaptainDetails