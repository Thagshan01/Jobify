import React from 'react'
import "tailwindcss";
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className=' shadow py-4'>
        <div className=' container px-4 2xl:px-20 mx-auto flex justify-between'>
            <img src={assets.logo} alt="" />
            <div className='flex gap-4 max-sm:text-sm'>
                <button className=' bg-black'>Recruiter Login</button>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar