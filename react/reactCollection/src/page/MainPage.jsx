import React from 'react';

const MainPage = () => {
  return (
    <div>
      리액트 공부중~
      <ul>
        <li>
          <h2>
            <a href="/scroll">/scorll</a>
          </h2>
          <p>스크롤 이벤트</p>
        </li>
        <li>
          <h2>
            <a href="/slider">/slider</a>
          </h2>
          <p>슬라이더 이벤트</p>
        </li>
        <li>
          <h2>
            <a href="/date">/date</a>
          </h2>
          <p>캘린더</p>
        </li>
        <li>
          <h2>
            <a href="/dropdown">/dropdown</a>
          </h2>
          <p>드롭다운</p>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
