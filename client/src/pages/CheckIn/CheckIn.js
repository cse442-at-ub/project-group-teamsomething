import React from 'react'

const CheckIn = () => {
  return (
    <div className='bg-[#FED99B] h-screen flex justify-center items-center h-full'>
        <div class="w-1/3 h-1/2 rounded-lg bg-[#662c91] grid grid-cols-1 grid-rows-4 gap-1"> 
            <div></div> 
            <div class='place-self-center text-lg text-white sm:text-1xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                Did you complete your daily goal?
            </div>
            <div class="place-self-center text-center w-1/3 h-1/3 rounded-full bg-[#57cf1e] text-lg text-white sm:text-1xl md:text-2xl lg:text-3xl font-semibold mb-4">
                ✓
            </div>
            <div class='place-self-center text-center w-1/3 h-1/3 rounded-full bg-[#c72929] text-lg text-white sm:text-1xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                x
            </div>
        </div>
    </div>
  )
}

export default CheckIn
