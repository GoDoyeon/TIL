import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

const TeamDate = (props) => {
  //edit 팀 수정시 사용
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    recruit,
    recruitMaxDate,
    edit,
    projectMindate,
  } = props;

  //모집일 최소날짜
  let _periodMinDate = new Date(startDate);
  let periodMinDate = new Date(
    _periodMinDate.setDate(_periodMinDate.getDate() + 1),
  );
  //프로젝트 시작일 최대날짜
  let _projectMaxDate = new Date(endDate);
  let projectMaxDate = new Date(
    _projectMaxDate.setDate(_projectMaxDate.getDate() - 1),
  );

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <DateBtn onClick={onClick} ref={ref}>
      {value}
    </DateBtn>
  ));

  if (recruit) {
    return (
      <DateBox>
        <DatePicker
          locale={ko}
          selected={startDate}
          selectsStart
          startDate={startDate}
          minDate={startDate}
          maxDate={startDate}
          customInput={<ExampleCustomInput />}
          closeOnScroll={true}
          popperPlacement="auto"
        />
        <Sign>-</Sign>
        <DatePicker
          locale={ko}
          selected={endDate}
          onChange={setEndDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={periodMinDate} //최소 하루 더한날!
          maxDate={recruitMaxDate} //프로젝트 마감일을 넘어서면 안됨.
          customInput={<ExampleCustomInput />}
          closeOnScroll={true}
          popperPlacement="auto"
        />
      </DateBox>
    );
  }

  return (
    <DateBox>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={setStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={edit ? projectMindate : new Date()}
        maxDate={projectMaxDate}
        customInput={<ExampleCustomInput />}
        closeOnScroll={true}
        popperPlacement="auto"
      />
      <Sign>-</Sign>
      <DatePicker
        locale={ko}
        selected={endDate}
        onChange={setEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={periodMinDate}
        customInput={<ExampleCustomInput />}
        closeOnScroll={true}
        popperPlacement="auto"
      />
    </DateBox>
  );
};

export default TeamDate;

const DateBtn = styled.button`
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  padding: 3px 6px;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 0.9em;
`;

const DateBox = styled.div`
  display: flex;
  width: 165px;
  padding: 2px 5px;
  position: relative;
  left: -7px;
`;

const Sign = styled.p`
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  position: relative;
  top: 5px;
`;
