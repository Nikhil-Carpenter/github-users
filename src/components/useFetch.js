import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(false);
 

    const getUsers= async()=>{
        setError(false);
        setIsLoading(true);

        try{
            let response = await fetch(url)

            if(!response.ok){
                throw new Error("Something went wrong!!!")
            }

            let data = await response.json();
            setData(data)
            setIsLoading(false)

        }catch(err){
            console.log(err.message)
            setError(true)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUsers();
    }, [url])

    return { data,error,isLoading }
    
}

export default useFetch