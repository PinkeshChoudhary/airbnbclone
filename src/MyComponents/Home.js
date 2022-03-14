import React from "react";
import { Banner } from "./Banner";
import './Style.css';
import { Card } from "./Card";


export const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="homesection">
        <Card
        src='https://media.cntraveler.com/photos/60dcbe7f9f22ca31befb45e3/16:9/w_2560%2Cc_limit/TheWorldsMostAmazingVacationRentals_Season1_Episode1_00_03_24_04.jpg'
        title= "Online Experiences"
        description = "Unique activities we can do together, led by a world of hosts."
        />
         <Card
        src="https://www.dontforgettomove.com/wp-content/uploads/2014/10/hotel4-690x388.jpg"
        title= "Unique stays"
        description = "places that are more than just a place to sleep"
        />
         <Card
        src="https://i.guim.co.uk/img/media/86011c05a6ac3379947d6a7cc3b2b9c9a0af1326/0_120_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=202d677c1a75dd11474044f2687cdc6c"
        title= "Entire homes"
        description = "Comfortable private places, with room for friends of family."
        />
       <Card
        src="https://www.thedailymeal.com/sites/default/files/2018/01/30/0_1.jpg"
        title= "Experiences"
        description = " best way to unplug from the pushes and pulls of daily life."
        />
       
      </div>
      <h2 style={{display:'block', marginLeft: '-950px'}}>Inspiration for your next trip</h2>

      <div className="homesection">
      <Card
        src='https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=240'
        title= "Shimla"
        description = "279 kilometres away"
        />
         <Card
        src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=240"
        title= "Manali"
        description = "405 kilometres away"
        />
         <Card
        src="https://a0.muscache.com/im/pictures/987777cc-4ef6-4db7-93fe-b40770abd75d.jpg?im_w=240"
        title= "Dehradun"
        description = "207 kilometres away"
        />
         <Card
        src="https://a0.muscache.com/im/pictures/987777cc-4ef6-4db7-93fe-b40770abd75d.jpg?im_w=240"
        title= "Dehradun"
        description = "207 kilometres away"
        />
      
       
      </div>
    </div>
  );
};
