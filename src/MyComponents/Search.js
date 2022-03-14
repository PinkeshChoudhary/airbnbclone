import React,{useState} from 'react'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker} from "react-date-range";
import {Button} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People'

import{useHistory} from 'react-router-dom';
import './Style.css';




export const Search = () => {
    const history = useHistory();
    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(null);
    const selectionRange={
        startDate: startDate,
        endDate: endDate,
        key : "selection",
    }
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);

    }
  return (
    <div className='search'>
        <DateRangePicker ranges ={[selectionRange]} onchange={handleSelect}/>
        <h2>Number of guests<PeopleIcon/>
        <input  min={0} defaultValue ={2}type='number'/></h2>
        <Button onClick={()=>history.push('./search')}>Search Airbnb</Button>
    </div>
  )
}
