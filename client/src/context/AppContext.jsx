import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    });    
        
    const [isSearched, setIsSearched] = useState(false);

    const [jobs, setJobs] = useState([])

    const  [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

    // function to fectch jobs
    const fetchJobs = async () =>{
         setJobs(jobsData)
    }
    
    useEffect(()=>{
      fetchJobs()
    },[])
    
    const value = {
        setSearchFilter,
        searchFilter,
        isSearched, 
        setIsSearched,
        jobs,
        setJobs,
        showRecruiterLogin,
        setShowRecruiterLogin
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
