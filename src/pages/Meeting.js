import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import getDay from 'date-fns/getDay';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import '../assets/css/meetings.css';
function Meeting() {
  const today = new Date();
  const [startDate, setStartDate] = useState(
    new Date()
  );
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 5 && day !== 6;
  };
  return (
    <div className='container card meeting'>
    <div className='sec1'>
        <h4>Input your preferable date and time for the meeting</h4>
        
        <DatePicker
          className='inputmeet'
          minDate={today}
          selected={startDate}
          filterDate={isWeekday}
          onChange={(date) => setStartDate(date)}
          locale="pt-BR"
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
          includeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 17),
            setHours(setMinutes(new Date(), 0), 18),
            setHours(setMinutes(new Date(), 30), 18),
          ]}
          dateFormat="MMMM d, yyyy h:mm aa"
        /> 
    </div>
  

    <Button varient='none' className='meetbtn'>Request Appointment</Button>
    </div>
  );
};
  export default Meeting;