import React, { useState } from 'react'
import { FaMapMarkerAlt, FaChevronDown, FaSearch, FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Alley from '../assets/Alley.jpeg'
import Alpes from '../assets/Alpes.jpg'
import London from '../assets/London.jpg'
import America from '../assets/America.jpg'
import './Horizontal.css';

const Second = () => {
    const navigate = useNavigate()
    const options = ["Location", "Hotel", "Food", "Adventure", "Actions"];
    const [selectedOption, setSelectedOption] = useState(null);
    const handleClick = (option) => {
        setSelectedOption(option);
    };
    const handleNavigate = () => {
        navigate("/page3")
    }

    return (
        <div className='p-5 overflow-x-hidden'>
            <div className=' flex justify-between items-start'>
                <div>
                    <p>Explore</p>
                    <p className='text-3xl font-semibold'>Aspen</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaMapMarkerAlt size={12} color='blue' />
                    <p className='text-sm'>Aspen, USA</p>
                    <FaChevronDown size={12} color='blue' />
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                <div className="flex items-center w-full rounded-2xl p-2 bg-blue-50 py-3">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        className="flex-1 border-none outline-none text-sm bg-blue-50"
                        placeholder="Find things to do"
                    />
                </div>
            </div>
            <div className="flex overflow-x-auto space-x-1  rounded-md horizontal-scroll-container mb-5 items-center md:justify-center w-screen">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 px-6 py-2 rounded-md cursor-pointer transition scroll-item ${selectedOption === option ? 'text-blue-500 bg-blue-50 rounded-2xl font-semibold' : ''}`}
                        onClick={() => handleClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <div className='flex  justify-between items-center mb-5'>
                <p className='text-xl font-semibold'>Popular</p>
                <p className='text-xs font-semibold text-blue-600'>See All</p>
            </div>
            <div className='grid grid-cols-2 gap-5  mb-5'>
                <div className='relative' onClick={handleNavigate}>
                    <img src={Alpes} alt='' className='w-full h-56 rounded-2xl object-cover' />
                    <p className='absolute bottom-10 left-2 bg-gray-500 text-white py-1 px-4 text-xs rounded-2xl'>Alley Place</p>
                    <div className='absolute bottom-2 left-2 flex justify-between w-full pr-4'>
                        <p className='flex justify-center items-center gap-1  bg-gray-500 text-white py- px-2 text-xs rounded-2xl'>
                            <FaStar color='yellow' />
                            4.1
                        </p>
                        <p className='flex justify-center items-center gap-1  shadow-md  bg-white text-white p-1  text-xs rounded-full'>
                            <IoMdHeart size={15} color='red' />
                        </p>
                    </div>

                </div>
                <div className='relative' onClick={handleNavigate}>
                    <img src={Alley} alt='' className='w-full h-56 rounded-2xl object-cover' />
                    <p className='absolute bottom-10 left-2 bg-gray-500 text-white py-1 px-4 text-xs rounded-2xl'>Coeurdes alpes</p>
                    <div className='absolute bottom-2 left-2 flex justify-between w-full pr-4'>
                        <p className='flex justify-center items-center gap-1  bg-gray-500 text-white py- px-2 text-xs rounded-2xl'>
                            <FaStar color='yellow' />
                            4.1
                        </p>
                        <p className='flex justify-center items-center gap-1  shadow-md  bg-white text-white p-1  text-xs rounded-full'>
                            <IoMdHeart size={15} color='red' />
                        </p>
                    </div>

                </div>
            </div>
            <div className='flex  justify-between items-center mb-5'>
                <p className='text-xl font-semibold'>Recommended</p>
                <p className='text-xs font-semibold text-blue-600'>See All</p>
            </div>
            <div className='grid grid-cols-2 gap-5 '>
                <div className='relative' onClick={handleNavigate}>
                    <img src={London} alt='' className='w-full h-56 rounded-2xl object-cover' />
                    <p className='absolute bottom-10 left-2 bg-gray-500 text-white py-1 px-4 text-xs rounded-2xl'>Alley Place</p>
                    <div className='absolute bottom-2 left-2 flex justify-between w-full pr-4'>
                        <p className='flex justify-center items-center gap-1  bg-gray-500 text-white py- px-2 text-xs rounded-2xl'>
                            <FaStar color='yellow' />
                            4.1
                        </p>
                        <p className='flex justify-center items-center gap-1  shadow-md  bg-white text-white p-1  text-xs rounded-full'>
                            <IoMdHeart size={15} color='red' />
                        </p>
                    </div>

                </div>
                <div className='relative' onClick={handleNavigate}>
                    <img src={America} alt='' className='w-full h-56 rounded-2xl object-cover' />
                    <p className='absolute bottom-10 left-2 bg-gray-500 text-white py-1 px-4 text-xs rounded-2xl'>Alley Place</p>
                    <div className='absolute bottom-2 left-2 flex justify-between w-full pr-4'>
                        <p className='flex justify-center items-center gap-1  bg-gray-500 text-white py- px-2 text-xs rounded-2xl'>
                            <FaStar color='yellow' />
                            4.1
                        </p>
                        <p className='flex justify-center items-center gap-1  shadow-md  bg-white text-white p-1  text-xs rounded-full'>
                            <IoMdHeart size={15} color='red' />
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Second;
