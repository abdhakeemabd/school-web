import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Logo1 from '../assets/logo/logo-t.png'
import { Mobile } from "../assets/img/logo/college-logo.png";

const StyledHeader = styled.header`
  background-color: #0A5139;
  color:#fff;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content:end !importent;
  width:100%
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 28px;
    cursor: pointer;
  }
  img {
    max-height:60px;
    max-weight:70px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      color: #44a8f4;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 10px 10px;
    opacity:0.8;
    &:hover {
    opacity:1;
    }
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const Navbar = () => {
  return (
    <>
      <StyledHeader>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
        <img className="img-fluid h-" src={Logo1}  />
       </div>
       <div className="col-md-8">
       <NavManu className="justify-content-end mt-2">
        <li>
            <Link to={"/"} className="nav-menu-list">
          Home
            </Link>
            </li>
          <li>
            <Link to={"/about"} className="nav-menu-list">
              About
            </Link>
          </li>
          <li>
            <Link to={"/blogs"} className="nav-menu-list">
              Blog
            </Link>
          </li>
          <li>
          <Link to={"/gallery"} className="nav-menu-list">
             Gallery
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="nav-menu-list">
             Contact
            </Link>
          </li>
        </NavManu>
       </div>
        </div>
        </div>
        <FaBars className="menuToggleBtn" />
      </StyledHeader>
    </>
  );
};
export default Navbar