import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';// Update with correct path
import { assets, JobCategories, JobLocations } from '../assets/assets'; // Update with correct path
import JobCard from './JobCard';

const JobListing = () => {
    const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);

    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [filteredJobs, setFilteredJobs] = useState(jobs);

    const handleCategoryChange = (category) => {
        setSelectedCategories(

            prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]

        );
    };

    const handleLocationChange = (location) => {
        setSelectedLocations(

            prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]

        );
    };

    return (
        <div className='container flex flex-col py-8 mx-auto 2xl:px-20 lg:flex-row max-lg:space-y-8'>
            {/*Sidebar*/}
            <div className='w-full px-4 bg-white lg:w-1/4'>
                {/*Search Filter from hero component*/}
                {
                    isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                        <>
                            <h3 className='mb-4 text-lg font-medium'>Current Search</h3>
                            <div className='mb-4 text-gray-600 '>
                                {searchFilter.title && (
                                    <span className='inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-4 py-1.5 rounded'>
                                        {searchFilter.title}
                                        <img onClick={() => setSearchFilter(prev => ({ ...prev, title: "" }))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                    </span>
                                )}
                                {searchFilter.location && (
                                    <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border-red-200 px-4 py-1.5 rounded'>
                                        {searchFilter.location}
                                        <img onClick={() => setSearchFilter(prev => ({ ...prev, location: "" }))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                    </span>
                                )}
                            </div>
                        </>
                    )
                }

                <button onClick={e => setShowFilter(prev => !prev)} className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'>
                    {showFilter ? "Close" : "Filters"}
                </button>

                {/* Category Filter */}
                <div className={showFilter ? "" : "max-lg:hidden"} >
                    <h4 className='py-4 text-lg font-medium'>Search By Categories</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {
                            JobCategories.map((category, index) => (
                                <li className='flex items-center gap-3' key={index}>
                                    <input
                                        className='scale-125'
                                        type="checkbox"
                                        onChange={() => handleCategoryChange(category)}
                                        checked={selectedCategories.includes(category)} />
                                    {category}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* location filter */}
                <div className={showFilter ? "" : "max-lg:hidden"}>
                    <h4 className='py-4 text-lg font-medium pt-14'>Search By Categories</h4>
                    <ul className='space-y-4 text-gray-600'>
                        {
                            JobLocations.map((location, index) => (
                                <li className='flex items-center gap-3' key={index}>
                                    <input className='scale-125' type="checkbox"
                                        onChange={() => handleLocationChange(location)}
                                        checked={selectedLocations.includes(location)} />
                                    {location}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* job listing */}
            <section className='w-full text-gray-800 lg:w-3/4 max-lg:px-4'>
                <h3 className='py-2 text-3xl font-medium' id='job-list'>Latest Job</h3>
                <p className='mb-8'>Get your desired job from top companies</p>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                    {jobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>

                {/* pagination */}
                {jobs.length > 0 && (
                    <div className='flex items-center justify-center mt-10 space-x-2'>
                        <a href="#job-list">
                            <img onClick={() => setCurrentPage(Math.max(currentPage - 1), 1)} src={assets.left_arrow_icon} alt="" />
                        </a>
                        {Array.from({ length: Math.ceil(jobs.length / 6) }).map((_, index) => (
                            <a href="#job-list">
                                <button onClick={() => setCurrentPage(index + 1)} className={`w-10 h-10 flex items-center justify-center border rounded border-gray-300 ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`} >{index + 1}</button>
                            </a>
                        ))}
                        <a href="#job-list">
                            <img onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(jobs.length / 6)))} src={assets.right_arrow_icon} alt="" />
                        </a>

                    </div>

                )}

            </section>
        </div>
    )
}

export default JobListing
