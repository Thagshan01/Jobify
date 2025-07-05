import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
    const navigate = useNavigate()
    
    const handleLogout = () => {
        // Add logout logic here
        navigate('/')
    }

    return (
        <div className='min-h-screen'>
            {/* Navbar for Recruiter Panel */}
            <div className='py-4 shadow'>
                <div className='flex items-center justify-between px-5'>
                    <img onClick={e => navigate('/')} className='cursor-pointer max-sm:w-32' src={assets.logo} alt="" />
                    <div className='flex items-center gap-3'>
                        <p className='max-sm:hidden'>Welcome Jobify</p>
                        <div className='relative group'>
                            <img className='w-8 border rounded-full' src={assets.company_icon} alt="" />
                            <div className='absolute top-0 right-0 z-10 hidden pt-12 text-black rounded group-hover:block'>
                                <ul className='p-2 m-0 text-sm list-none bg-white border rounded-md'>
                                    <li onClick={handleLogout} className='px-2 py-1 pr-10 cursor-pointer hover:bg-gray-100'>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-start'>
                {/* left Sidebar for add,manage,view jobs */}
                <div className='inline-block min-h-screen border-r-2 border-gray-200 w-[250px] max-sm:w-[60px]'>
                    <ul className='flex flex-col items-start pt-5 text-gray-800'>
                        <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/add-job'}>
                            <img className='min-w-4' src={assets.add_icon} alt="" />
                            <p className='max-sm:hidden'>Add Job</p>
                        </NavLink>

                        <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/manage-jobs'}>
                            <img className='min-w-4' src={assets.home_icon} alt="" />
                            <p className='max-sm:hidden'>Manage Job</p>
                        </NavLink>

                        <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/view-applications'}>
                            <img className='min-w-4' src={assets.person_tick_icon} alt="" />
                            <p className='max-sm:hidden'>View Application</p>
                        </NavLink>
                    </ul>
                </div>

                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
