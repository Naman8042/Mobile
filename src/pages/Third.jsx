import Hotel from '../assets/Alley.jpeg'
import { FaStar, FaChevronDown } from "react-icons/fa";
import { CiWifiOn } from "react-icons/ci";
import { MdOutlineFastfood } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaArrowRight, FaChevronLeft } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Third = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/page2")
  }
  return (
    <div className='p-5 md:hidden block h-full'>
      <div className='relative mb-5 h-80'>
        <img src={Hotel} alt='' className='w-full h-full rounded-2xl object-cover' />
        <p className='absolute top-2 left-2 bg-white text-gray-500 p-4 text-xs rounded-xl' onClick={handleNavigate}><FaChevronLeft /></p>
        <p className='flex justify-center items-center gap-1 absolute -bottom-5 shadow-md right-2 bg-white text-white p-2  text-xs rounded-full'>
          <IoMdHeart size={25} color='red'/>
        </p>
      </div>
      <div className='flex justify-between items-center '>
        <h1 className='text-2xl font-semibold'>Coeurdes Alpes</h1>
        <div className='text-xs text-blue-600 font-bold'>Show Map</div>
      </div>
      <div className='flex gap-1 mt-1 items-center pl-1'>
        <FaStar className='text-amber-600' size={13} />
        <p className='text-xs'>4.5 (355 Reviews)</p>
      </div>
      <p className='text-sm mt-2 mb-1 w-full'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nihil quo sed fugiat qui molestias earum beatae iure voluptates minus ducimus eaque non pariatur similique...
      </p>
      <div className='flex items-center text-sm gap-2 text-blue-700 font-semibold mb-5'>
        Read More <FaChevronDown size={10} />
      </div>
      <h1 className='text-xl font-semibold'>Facilities</h1>
      <div className='flex justify-between gap-5 mt-2'>
        <div className='flex flex-col justify-center items-center bg-blue-100 w-full py-2 rounded-xl text-gray-400'>
          <CiWifiOn size={30} />
          <p className='text-xs'>1 Heater</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-blue-100 w-full py-2 rounded-xl text-gray-400'>
          <MdOutlineFastfood size={30} />
          <p className='text-xs'>Dinner</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-blue-100 w-full py-2 rounded-xl text-gray-400'>
          <GiBathtub size={30} />
          <p className='text-xs'>1 Tub</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-blue-100 w-full py-2 rounded-xl text-gray-400'>
          <FaSwimmingPool size={30} />
          <p className='text-xs'>Pool</p>
        </div>
      </div>
      <div className='flex justify-between mt-5'>
        <div>
          <p className='text-sm'>Price</p>
          <p className='text-2xl text-green-500 font-bold'>$199</p>
        </div>
        <button className='flex gap-2 justify-center items-center w-[70%] bg-blue-600 text-white rounded-lg'>
          Book Now <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Third