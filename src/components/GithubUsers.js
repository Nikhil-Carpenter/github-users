import React,{useState,useEffect} from 'react';
import spinner from "../assets/spinner1.jpg";
import useFetch from './useFetch';
const url = "https://api.github.com/users";


const GithubUsers = () => {

    const { data ,error,isLoading } = useFetch(url);


  return (
    <div className='--mh-100vh --bg-primary --w100'>    
        <div className='container '>
            <header className='--p2 --bg-dark'>
                <h1 className='--text-center --color-white'>Github Users</h1>
                <div className='--line'></div>
            </header>
            {
                 isLoading&&(
                    <div className='--w100 --dir-column --rg1 --flex-center'>
                        <img style={{width:"60px",height:"60px"}} src={spinner} alt="loading" />
                        <h4 className='--text-white'>Loading...</h4>
                    </div>)
            }

            
            
            <div className='--grid-25 --py'>
            {
                error?(
                    <h4 className='--text-center --py --text-white'>Something went wrong!!!</h4>
                ):(
                    data.map((user)=>{
                        return(
                            <div key={user.id} className='--card --bg-white --align-center --p --flex-start'>
                                <img src={user.avatar_url} alt="userimg" className='--mx --profile-img'/>
                                <span>
                                    <h4>{user.login}</h4>
                                    <a href={user.html_url} target="blank">View Profile</a>
                                </span>
                            </div>
                        )
                    })
                )
            }
           

            
                
            </div>
        </div>
    </div>
  )
}

export default GithubUsers