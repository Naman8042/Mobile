import React from 'react'
import Mountain from '../assets/Mountain.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <img src={Mountain} alt="Mountain" className="w-full h-full object-cover" />
      <p className='absolute top-20 text-center w-full text-6xl text-white'>Aspen</p>
      <div className='bottom-28 text-white absolute px-6'>
        <p className='text-xl'>Plan your</p>
        <p className='text-4xl font-semibold'>Luxurious</p>
        <p className='text-4xl font-semibold'>Vacation</p>
      </div>
      <div className='absolute bottom-12 flex items-center justify-center w-full px-6'>
      <button className='w-full bg-blue-700 py-3 rounded-lg text-white'>
        <Link to="/page2">Explore</Link>
      </button>
      </div>
    </div>
  )
}

export default Home