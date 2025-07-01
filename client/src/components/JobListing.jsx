import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';// Update with correct path
import { assets } from '../assets/assets'; // Update with correct path

const JobListing = () => {
    const {isSearched, searchFilter,setSearchFilter} = useContext(AppContext);
    
    return (
        <div>
           {/*Sidebar*/} 
           <div>
             {/*Search Filter from hero component*/} 
             {
                isSearched && ( searchFilter.title !== "" || searchFilter.location !== "" ) && (
                    <>
                     <h3>Current Search</h3>
                     <div>
                        {searchFilter.title && (
                            <span>
                                {searchFilter.title}
                                <img onClick={() => setSearchFilter(prev => ({...prev,title:""}))} className='cursor-pointer' src={assets.cros_icon} alt="" />
                            </span>
                        )}
                        {searchFilter.location && (
                            <span>
                                {searchFilter.location}
                                <img onClick={() => setSearchFilter(prev => ({...prev,location:""}))} className='cursor-pointer' src={assets.cros_icon} alt="" />
                            </span>
                        )}
                     </div>
                    </>
                )
             }
           </div>
        </div>
    )
}

export default JobListing
