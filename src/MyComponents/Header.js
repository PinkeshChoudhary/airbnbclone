import React from 'react'
 import './Style.css';
 import SearchIcon from '@material-ui/icons/Search';
 import LanguageIcon from '@material-ui/icons/Language';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//  import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 import{Avatar, IconButton} from '@material-ui/core';


 

export const Header = () => {
  return (
      <>
    <div className='header'>
        <div className='icon'>
            <img src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg'width='100%' className='logo'/>
        </div>

       <div className='headercenter'>
         <input type ='text'/>
           <SearchIcon/>
         
       </div>
       <div className='headerright'>
         <p>Become a host</p>
         <IconButton>
         <LanguageIcon/>
         </IconButton>
         <IconButton>
         <ExpandMoreIcon/>
         </IconButton>
         <Avatar/>
       </div>
     </div>
     {/* <div className='container1'>
         <div className='location'>
          <label>Location</label>
          <input type='text' placeholder='where are you going?'></input>
         </div>
         <div className='dates'>
             <div className='checkin'>
               <label>Check in</label>
               <input type='date' placeholder='Add dates'></input>
             </div>
             <div className='checkout'>
             <label>Check out
               <input type='date' placeholder='Add dates'></input>
               </label>
             </div>
         </div>
         <div className='guest'>
             <div className='addguest'>
               <label>Guests</label>
               <input type='text' placeholder='Add guests'></input>
             </div>
             <div className='search'>

             </div>
         </div>
     </div> */}
     </>
  )
}
