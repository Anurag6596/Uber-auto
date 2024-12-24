import React from 'react'

const LocationSearchPanel = (props) => {


  // sample array for location

  const locations = [
    'House no.2146 behind patel lawns saoner, new Gujarkhedi',
    'House no.2145 behind jaiswal lawn saoner, new Gujarkhedi',
    'House no.2144 behind manaswi pater plant saoner, new Gujarkhedi',
    'House no.2143 behind gavhane Residence saoner, new Gujarkhedi',
    'House no.2142 behind gayatri niwas saoner, new Gujarkhedi',
  ]


  return (
    <div>
      {/* this is just a sample data */}
      {
        locations.map(function(elem,idx){
          // eslint-disable-next-line react/jsx-key
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setpanelOpen(false)
          }} className='flex gap-4 border-2 p-3 border-gray-30 active:border-black rounded-xl items-center my-2 justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
          <h4 className='text-medium'>{elem}</h4>
        </div>
        })
      }



    </div>
  )
}

export default LocationSearchPanel