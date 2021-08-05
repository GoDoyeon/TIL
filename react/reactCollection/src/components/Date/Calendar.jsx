import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Calendar = (showCalendar) => {
  const { handleClick } = showCalendar;

  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  // 그 달의 시작하는 주
  const firstWeek = today.clone().startOf('month').week();
  // 그 달의 끝나는 주
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day');

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })}
        </tr>,
      );
    }
    return result;
  };

  return (
    <CalendarWrapper onClick={handleClick}>
      <CalendarBlock>
        <div style={{ display: 'flex' }}>
          <Calendarbutton
            onClick={() => {
              setMoment(getMoment.clone().subtract(1, 'month'));
            }}
          >
            <BsChevronLeft size="10px" color="#707070" />
          </Calendarbutton>
          <YearAndMonth>{today.format('YYYY년 MM월')}</YearAndMonth>
          {/* <Calendarbutton
            onClick={() => {
              setMoment(getMoment.clone().add(1, 'month'));
            }}
          >
            <BsChevronRight size="10px" color="#707070" />
          </Calendarbutton> */}
        </div>
        <table>
          <tbody>
            <tr>
              <td>일</td>
              <td>월</td>
              <td>화</td>
              <td>수</td>
              <td>목</td>
              <td>금</td>
              <td>토</td>
            </tr>
            {calendarArr()}
          </tbody>
        </table>
      </CalendarBlock>
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div`
  /* width: 67.8rem;
  height: 29.8rem;
  padding: 24px 24px 24px 24px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: #cbcbcb; */

  height: 100%;
  width: 100vw;
  font-size: 1.5vh;
  display: flex; /* display 설정해줘야 아래 flex로 해주면 direction 선택가능*/
  flex-direction: column; /* 이건 세로순으로  태그들을 표시함 css*/
  align-items: center; /* 가로 중앙 css*/
  justify-content: center; /* 세로 중앙 css*/

  .control {
    display: flex;
    flex-direction: row;
  }
  table {
    display: flex;
    width: 50vw;
    height: 50vh;
  }
  table tbody {
    display: flex;
    flex-direction: column;
  }
  tr {
    display: flex;
    flex-direction: row;
  }
  td {
    display: flex;
    border: 1px solid gray;
    width: 32px;
    height: 32px;
    margin: 12px 10px 12px 18px;
    padding: 8px 11px 8px 12px;
    border: none;
    font-size: 14px;
    color: #2a2a2a;
  }
  td span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CalendarBlock = styled.div`
  /* width: 33.9rem; */
`;

const Calendarbutton = styled.button`
  width: 28px;
  height: 28px;
  margin: 0 22px 6px 0;
  padding: 9.4px 12.7px 9.6px 10.8px;
  background-color: #fff;
  border: none;
`;

const YearAndMonth = styled.p`
  width: 75px;
  height: 19px;
  margin: 4px 24px 11px 3px;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  text-align: left;
  color: #2a2a2a;
`;
export default Calendar;
