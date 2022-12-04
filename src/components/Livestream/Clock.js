import React, { useEffect } from 'react';
import './clock.css'
function Clock({timerDay,timerHours,timerMinutes,timerSeconds}) {


   
  return(
      <>
     
  
              <div className='clock'>
                  <section>
                      <p>{timerDay}</p>
                      <small>Days</small>
                  </section> {""}
                  <span>:</span>
                  <section>
                      <p>{timerHours}</p>
                      <small>Hours</small>
                  </section>{""}
                  <span>:</span>
                  <section>
                      <p>{timerMinutes}</p>
                      <small>Minutes</small>
                  </section>{""}
                  <span>:</span>
                  <section>
                      <p>{timerSeconds}</p>
                      <small>Seconds</small>
                  </section>
              </div>
 
      </>
  );
}
Clock.defaultProps={
    timerDay:'no',
    timerHours:'no',
    timerMinutes:'no',
    timerSeconds:'no',
}

export default Clock;
