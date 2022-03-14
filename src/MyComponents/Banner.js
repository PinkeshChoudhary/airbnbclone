import React,{useState} from 'react'
import {Button} from '@material-ui/core';
import {useHistory } from "react-router-dom";
import './Style.css';
import { Search} from './Search';


export const Banner = () => {
    const history  = useHistory();
    const redirect = () =>{


      history.push('./search');
    }
    const[showSearch, setShowSearch] = useState(false)
  return (
      <>
    <div className='banner'>
        <div className='banner_search'>
            {showSearch && <Search/>}
            <button onClick={() => setShowSearch(!showSearch)} className ="banner_searchButton" varient ="outline">{showSearch? "hide" : "Search Dates"}</button>

        </div>
        <div className='banner_info'>
            <h1>Get out and Stretch out your imagination</h1>
            <h5>Plan a different kind of getway to uncover the hidden gems near you </h5>



            <Button onClick={redirect} varient="outlined"> Explore Nearby</Button>

        </div>

   </div>
   </>
  )
}
