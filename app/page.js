'use client'
import React from 'react'

 import Lottie from 'react-lottie-player'
 import Animations from '@/public/assets/animations/instagram.json';
import Button from '@/src/components/button'
import useform from '@/src/hooks/useform'

const Home = () => {

  const { form, onChangeHandler } = useform({
    email: "",
    password: ""

  })


  const submithandler = async (e) => {
    e.preventdefault();
    console.log(form);

  }
  return (
    <div className=' font-bold text-4xl text-white w-screen h-screen flex justify-center items-center'>
      <div className='flex  w-4/5 h-4/5 '>
        <div className='w-full h-full bg-gray-500'>

          <Lottie
          loop
          animationData={Animations}
          autoplay
          style={{ width: 150, height: 150 }}
          className='w-full h-full'
        /> 
        </div>

        <div className='w-full  bg-white border border-gray-300 '>
          <form onSubmit={submithandler} className='flex flex-col space-y-4'>
    <div className='tracking-widest text-black'>Instagram</div>

            <input type='email'
              name='email'
              id='email'
              onChange={onChangeHandler}
              value={form?.email}
              className='bg-gray-400 text-black '
              placeholder='email' />

            <input type='password'
              name='password'
              id='password'
              onChange={onChangeHandler}
              value={form?.password}
              className='bg-gray-400 text-black'
              placeholder='password' />

            <button type='submit' className='bg-[#0095F6] py-2 px-6 text-white  active:scale-95 transform transition
            '>
              Log in
            </button>

          </form>



        </div>
      </div>


    </div>
  )
}

export default Home