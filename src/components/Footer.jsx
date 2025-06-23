import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='px-4 py-4 bg-black lg:px-28'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div>
                <h2 className='mt-2 text-lg font-bold text-white'>About Us</h2>
                <p className='text-white'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, sequi.
                </p>
            </div>
            <div>
            <h2 className='mt-2 text-lg font-bold text-white'>Quick Links</h2>
            <ul>
                <li><a href="" className='text-white hover:underline'>Home</a></li>
                <li><a href="" className='text-white hover:underline'>Services</a></li>
                <li><a href="" className='text-white hover:underline'>Contact</a></li>
                <li><a href="" className='text-white hover:underline'>Out Story</a></li>
            </ul>
            </div>
            <div>
            <h2 className='mt-2 mb-4 text-lg font-bold text-white'>Follow Us</h2>
            <ul className='flex gap-2'>
                <li> <FaFacebookF className='text-white'/>{""}<a href="" className='text-white hover:underline'>Facebook</a></li>
                <li><FaTwitter className='text-white'/>{""}<a href="" className='text-white hover:underline'>Twitter</a></li>
                <li><FaInstagram className='text-white'/>{""}<a href="" className='text-white hover:underline'>Instagram</a></li>
            </ul>
            </div>
        </div>
        <div className='mt-6 text-center text-white'>
            <p>@ 2025 Code With Gurprem Bhullar. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer