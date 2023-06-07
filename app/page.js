import React from 'react'

// import Lottie from 'react-lottie-player'
// import animations from '../public/assets/animations/instagram.json';

function Home() {
  return (
    <div className=' font-bold text-4xl text-red-700 w-screen h-screen flex justify-center items-center'>
      <div className='flex  w-4/5 h-4/5 '>
        <div className='w-full h-full bg-gray-500'>

          {/* <Lottie
          loop
          animationData={animations}
          autoplay
          style={{ width: 150, height: 150 }}
          className='w-full h-full'
        /> */}
        </div>

        <div className='w-full h-full bg-black'>

          <input type='email' name='email' id='email'></input>
          <input type='password' name='password' id='password'></input>
          <input></input>


        </div>
      </div>


    </div>
  )
}

export default Home