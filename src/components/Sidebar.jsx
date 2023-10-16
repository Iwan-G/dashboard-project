import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);

  const closeNavbar = () => {
    setNavbarState(false);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.addEventListener("click", closeNavbar);

    return () => {
      html.removeEventListener("click", closeNavbar);
    };
  }, []);

  return (
    <SidebarContainer>
      <div className="top">
        <div className="brand">
          <FaTaxi />
          <span>MY TAXI</span>
        </div>
        <div className="toggle">
          {navbarState ? (
            <VscChromeClose onClick={closeNavbar} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setNavbarState(true);
              }}
            />
          )}
        </div>
        <div className="links">
          <ul>
            {Array.from({ length: 6 }, (_, i) => (
              <NavItem
                key={i + 1}
                index={i + 1}
                currentLink={currentLink}
                onClick={() => setCurrentLink(i + 1)}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="logout">
        <a href="#">
          <FiLogOut />
          <span className="logout">Logout</span>
        </a>
      </div>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            {Array.from({ length: 6 }, (_, i) => (
              <NavItem
                key={i + 1}
                index={i + 1}
                currentLink={currentLink}
                onClick={() => setCurrentLink(i + 1)}
              />
            ))}
          </ul>
        </div>
      </ResponsiveNav>
    </SidebarContainer>
  );
};

const NavItem = ({ index, currentLink, onClick }) => (
  <li onClick={onClick} className={currentLink === index ? "active" : "none"}>
    <a href="#">
      {getIconForIndex(index)}
      <span> {getLabelForIndex(index)}</span>
    </a>
  </li>
);

const getIconForIndex = (index) => {
  switch (index) {
    case 1:
      return <MdSpaceDashboard />;
    case 2:
      return <RiDashboard2Fill />;
    case 3:
      return <FaAddressCard />;
    case 4:
      return <GiTwirlCenter />;
    case 5:
      return <BsFillChatTextFill />;
    case 6:
      return <IoSettings />;
    default:
      return null;
  }
};

const getLabelForIndex = (index) => {
  switch (index) {
    case 1:
      return "Dashboard";
    case 2:
      return "Riders";
    case 3:
      return "Payment Details";
    case 4:
      return "Learning Center";
    case 5:
      return "FAQs";
    case 6:
      return "Settings";
    default:
      return "";
  }
};

const SidebarContainer = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`;

export default Sidebar;
