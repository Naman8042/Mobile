import React from 'react'
import Mountain from '../assets/background.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <img src={Mountain} alt="Mountain" className="w-full h-full object-cover" />
      <p className='absolute top-12 text-center w-full text-6xl text-white font-eater'>Aspen</p>
      <div className='bottom-28 text-whit absolute px-6'>
        <p className='text-2xl font-semibold'>Plan your</p>
        <p className='text-5xl font-bold'>Luxurious</p>
        <p className='text-5xl font-bold'>Vacation</p>
      </div>
      <div className='absolute bottom-10 flex items-center justify-center w-full px-6'>
      <button className='w-full bg-blue-700 py-3 rounded-2xl text-white'>
        <Link to="/page2">Explore</Link>
      </button>
      </div>
    </div>
  )
}

export default Home