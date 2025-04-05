import React from 'react'
import bg from './assets/bg.jpg'
import logo from './assets/logo.png'
import leaf from './assets/leaf.png'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/caloriesCalculator');
    }
  return (
    <div className='bg-zinc-950 text-white h-screen w-screen relative'>
        <img src={bg} alt="" className='h-full w-full object-cover absolute inset-0' />
        <div className='relative h-full w-full md:w-2/3 mx-auto  p-4 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center gap-4 items-center  bg-opacity-80 rounded-lg p-8'>
                <div className='flex h-20 w-fit justify-center items-end'>
                    <img src={leaf} alt="" className='h-full ' />
                    <div className='h-full flex items-end pb-3 font-medium text-4xl '>Tracker</div>
                </div>
                <div className='text-center text-sm'>Tracker is your smart health guide — it predicts calories burned from daily activity and delivers personalized, science-backed tips to boost your fitness and lifestyle.</div>
                <button onClick={handleClick} className='p-3 w-1/2  text-sm font-semibold bg-white rounded-lg text-zinc-950 hover:bg-zinc-900 hover:text-white transition-all'>Get Started</button>
                <div className='flex justify-center items-center h-10 '>
                    <p className='text-sm font-medium'>Powered By</p>
                    <img src={logo} alt=""  className='h-full '/>

                </div>
                <div className='text-xs opacity-90 font-semibold'>Track Smarter | Live Healthier</div>

            </div>
        </div>
    </div>
  )
}

export default Home