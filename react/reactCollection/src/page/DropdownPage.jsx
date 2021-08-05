import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDetectOutsideClick } from '../components/DropDown/useDetectOutsideClick';
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
const DropdownPage = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <Container>
      <MenuContainer>
        <button onClick={onClick} className="menu-trigger">
          <span>User</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Saved</a>
            </li>
          </ul>
        </nav>
      </MenuContainer>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
`;
const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu-trigger {
    background: #ffffff;
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    margin-left: auto; /* Strictly for positioning */
  }

  .menu-trigger:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }

  .menu-trigger span {
    font-weight: 700;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
  }

  .menu-trigger img {
    border-radius: 90px;
  }

  .menu {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    border-bottom: 1px solid #dddddd;
  }

  .menu li a {
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
`;

export default DropdownPage;
