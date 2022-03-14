import React from 'react'
import {Button} from '@material-ui/core';
import './Style.css';
import { SearchResult } from './SearchResult';


export const SearchPage = () => {
  return (
    <div className='SearchPage'>
      <div className='searchpage_info'>
          <p>62 stays . 26 august to 30 august .2 guests</p>
          <h1>Stays nearby</h1>
          <Button variant ="outlined">Cancellation Flexibility</Button>
          <Button variant ="outlined">Type of Places</Button>
          <Button variant ="outlined">Price</Button>
          <Button variant ="outlined">Rooms and beds</Button>
          <Button variant ="outlined">More filters</Button>
      </div>
        <SearchResult
        img ="https://a0.muscache.com/im/pictures/05722dfc-522c-4362-9b3e-fcab749c7af6.jpg?im_w=960"
        location= "private room in the center of London"
        title ="stay in the spacious Edwardian House"
        description= " 1 guest . 1 bedroom . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
        star= {4.73}
        price = "$30/night"
        total ="$117 total"
        />
        <SearchResult
        img ="https://res.cloudinary.com/simplotel/image/upload/x_0,y_615,w_4813,h_1875,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/vits-hotels/Listing_Image_skazsy"
        location= "private room in the center of London"
        title ="Room in resort"
        description= " 3 guests . 1 bedroom . 2 beds . 1 private bathroom"
        star= {4.5}
        price = "$35/night"
        total ="$119 total"
        />
        <SearchResult
        img ="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
        location= "private room in the center of London"
        title ="Independent luxury studio apartment"
        description= " 2 guest . 3 bedroom . 1 bed . Wifi . Kitchen . Free parking "
        star= {4}
        price = "$50/night"
        total ="$200 total"
        />
        <SearchResult
        img ="https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE="
        location= "private room in the center of London"
        title ="London stdio apartment"
        description= " 1 guest . 1 bedroom . 1.5 shared bathrooms . Wifi . Kitchen "
        star= {4.3}
        price = "$40/night"
        total ="$157 total"
        />
        <SearchResult
        img ="https://www.eroshotels.co.in/wp-content/uploads/2018/04/superior-room-home-page.jpg"
        location= "private room in the center of London"
        title ="Independent luxury studio apartment"
        description= " 2 guest . 3 bedroom .  Wifi . Kitchen . Free parking . Washing Machine"
        star= {3.8}
        price = "$33/night"
        total ="$145 total"
        />
        </div>
  )
}
