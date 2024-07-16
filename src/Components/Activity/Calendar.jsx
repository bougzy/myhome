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


import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Calendar.css';

const Calendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [currentDate, setCurrentDate] = useState(new Date());

  const getCalendarDates = (date) => {
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const weeks = [];
    let week = new Array(7).fill('');
    let dayCount = 1;

    // Fill the first week
    for (let i = (startDay + 6) % 7; i < 7; i++) {
      week[i] = dayCount++;
    }
    weeks.push(week);

    // Fill the remaining weeks
    while (dayCount <= daysInMonth) {
      week = new Array(7).fill('');
      for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
        week[i] = dayCount++;
      }
      weeks.push(week);
    }

    return weeks;
  };

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + offset)));
  };

  const dates = getCalendarDates(currentDate);
  const activeDays = [1, 22, 24, 31]; // Days to highlight

  return (
    <Container className="calendar mt-4">
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <h3>
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </h3>
        </Col>
        <Col xs="auto">
          <div>
            <Button variant="link" className="p-0 mx-3 sprint-buttons round-border" onClick={() => changeMonth(-1)}>
              <span>&lt;</span>
            </Button>
            <Button variant="link" className="p-0 sprint-buttons round-border" onClick={() => changeMonth(1)}>
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







