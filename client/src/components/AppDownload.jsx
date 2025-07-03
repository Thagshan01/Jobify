import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div>
        <div className='container px-4 mx-auto my-20 2xl:px-20 '>
            <div className='relative p-12 rounded-lg bg-gradient-to-r from-violet-50 to-purple-50 sm:p-24 lg:p-32'>
                <h1 className='max-w-md mb-8 text-2xl font-bold sm:text-4xl'>Download Mobile App For Better Experience</h1>
                <div className='flex gap-4'>
                    <a className='inline-block' href="#">
                        <img className='h-12' src={assets.play_store} alt="" />
                    </a>
                    <a className='inline-block ' href="#">
                        <img className='h-12' src={assets.app_store} alt="" />
                    </a>
                </div>
                <img className='absolute bottom-0 right-0 mr-32 w-80 max-lg:hidden' src={assets.app_main_img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AppDownload