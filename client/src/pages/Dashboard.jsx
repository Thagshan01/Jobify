import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
    return (
        <div className='min-h-screen'>
            {/* Navbar for Recuriter Panel */}
            <div className='py-4 shadow'>
                <div className='flex items-center justify-between px-5'>
                    <img className='cursor-pointer max-sm:w-32' src={assets.logo} alt="" />
                    <div className='flex items-center gap-3'>
                        <p className='max-sm:hidden'>Welcome Jobify</p>
                        <div className='relative group'>
                            <img className='w-8 border rounded-full' src={assets.company_icon} alt="" />
                            <div className='absolute top-0 right-0 z-10 hidden pt-12 text-black rounded group-hover:block'>
                                <ul className='p-2 m-0 text-sm list-none bg-white border rounded-md'>
                                    <li className='px-2 py-1 pr-10 cursor-pointer'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard