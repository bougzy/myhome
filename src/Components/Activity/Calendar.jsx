// // src/components/Calendar.js
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const CalendarComponent = () => {
//   const [value, setValue] = useState(new Date());

//   const onChange = (nextValue) => {
//     setValue(nextValue);
//   };

//   return (
//     <div className="mt-5">
//       <Calendar onChange={onChange} value={value} className="p-5 border rounded" />
//     </div>
//   );
// };

// export default CalendarComponent;



import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Calendar.css';

const Calendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, '', '', '', '']
  ];
  const activeDays = [1, 22, 24, 31]; // Days to highlight

  return (
    <Container className="calendar mt-4">
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <h3>Januari 2023</h3>
        </Col>
        <Col xs="auto">
        {/* <div>
          <Button variant="link" className="p-0 mx-3 sprint-buttons"><span>&lt;</span></Button> 
          <Button variant="link" className="p-0 sprint-buttons "><span>&gt;</span></Button>
        </div> */}

<div>
      <Button variant="link" className="p-0 mx-3 sprint-buttons round-border">
        <span>&lt;</span>
      </Button>
      <Button variant="link" className="p-0 sprint-buttons round-border">
        <span>&gt;</span>
      </Button>
    </div>
       

        </Col>
      </Row>
      <Row className="mt-3">
        {days.map((day, index) => (
          <Col key={index} className="text-center">
            <strong>{day}</strong>
          </Col>
        ))}
      </Row>
      {dates.map((week, weekIndex) => (
        <Row key={weekIndex} className="mt-2">
          {week.map((date, dateIndex) => (
            <Col key={dateIndex} className="text-center">
              <span className={`date ${activeDays.includes(date) ? 'active' : ''}`}>
                {date}
              </span>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Calendar;






