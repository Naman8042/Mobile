import React from 'react'
import Mountain from '../assets/Mountain2.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <img src={Mountain} alt="Mountain" className="w-full h-full object-cover" />
      <p className='absolute top-12 text-center w-full text-6xl text-white font-eater'>Aspen</p>
      <div className='bottom-28 text-white absolute px-6'>
        <p className='text-2xl'>Plan your</p>
        <p className='text-5xl font-normal'>Luxurious</p>
        <p className='text-5xl font-normal'>Vacation</p>
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