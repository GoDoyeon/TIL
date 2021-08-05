import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from '../components/Date/Calendar';
import TeamDate from '../components/Date/TeamDate';
const DatePage = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const showCalendar = () => {
    console.log('dd');
    setIsCalendarOpen(!isCalendarOpen);
  };
  return (
    <div>
      <SearchDateWrapper
        onClick={showCalendar}
        readOnly
        placeholder="8월 6일 (금) - 8월 7일(토) | 1박"
      ></SearchDateWrapper>
      <Calendar showCalendar={showCalendar} />

      {/* <button onClick={showCalendar}>qq</button>
      <Calendar showCalendar={showCalendar} /> */}
    </div>
  );
};
const SearchDateWrapper = styled.input`
  width: 200px;
  height: 20px;
  margin: 0 1rem 0 1rem;
  border-radius: 7px;
  outline: none;
  background-color: #cbcbcb;
  border: solid 1px #cbcbcb;
  &::placeholder {
    padding-left: 20px;
    color: #2f2f2f;
    font-size: 12px;
  }
  &:hover {
    border: solid 1px blue;
  }
`;
export default DatePage;
