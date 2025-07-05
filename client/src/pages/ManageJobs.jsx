import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'// Assuming you have a data file for manage jobs
import { useNavigate } from 'react-router-dom' // Importing useNavigate for navigation

const ManageJobs = () => {

  const navigate =useNavigate()
  return (
    <div className='container p-4 max-w-5xl'>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'> 
            <thead>
              <tr>
                <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
                <th className='py-2 px-4 border-b text-left'>Job Title</th>
                <th className='py-2 px-4 border-b text-left max-sm:hidden'>Date</th>
                <th className='py-2 px-4 border-b text-left max-sm:hidden'>Location</th>
                <th className='py-2 px-4 border-b text-center'>Applicants</th>
                <th className='py-2 px-4 border-b text-left'>Visible</th>
              </tr>

            </thead>
            <tbody>
              {manageJobsData.map((job,index)=>(
                <tr key={index} className='text-gray-700'>
                  <td className='py-2 px-4 border-b max-sm-hidden'>{index+1}</td>
                  <td className='py-2 px-4 border-b'>{job.title}</td>
                  <td className='py-2 px-4 border-b max-sm-hidden'>{moment(job.date).format('ll')}</td>
                  <td className='py-2 px-4 border-b'>{job.location}</td>
                  <td className='py-2 px-4 border-b text-center'>{job.applicants}</td>
                  <td className='py-2 px-4 border-b'>
                    <input className='scale-125 ml-4' type="checkbox" checked={job.visible}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-4 flex justify-end'>
          <button onClick={()=>navigate('/dashboard/add-job ')} className='w-28 py-3 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50'>
            Add New Job
          </button>
        </div>
    </div>
  )
}

export default ManageJobs