import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import './Style.css';


export const SearchResult = ({img , location, title, description, star, price,total}) => {
  return (
    <div className='searchresult'>
        <img src={img} alt=""/>
        <FavoriteBorderIcon className="searchresult_heart"/>
        <div className='searchresult_info'>
        <div className='searchresult_infotop'>
            <p>{location}</p>
            <h3>{title}</h3>
            {/* <p>{location}</p> */}
            <p>{description}</p>
            </div>
            <div className='searchresult_infobottom'>
                <div className='searchresult_stars'>
                    <StarIcon className="searchresult_star"/>
                    <p>
                        <strong>{star}</strong>
                    </p>
                    </div>
                    <div className='searchresult_price'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                    </div>
                
            </div>
        </div>
    </div>
  )
}
