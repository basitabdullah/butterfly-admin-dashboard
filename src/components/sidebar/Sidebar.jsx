import { useContext, useEffect, useRef } from "react";

import { GoSearch } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineClose, MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import logo from "../../assets/images/logo.png"
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <div className="logo">
           <img src={logo} alt="" />
          </div>
          <span className="sidebar-brand-text">Butterfly</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24}  />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="search-link-top">
              <Link to="/" className="menu-link ">
                <span className="menu-link-icon">
                  <GoSearch size={21} />
                </span>
                <span className="menu-link-text">Search</span>
              </Link>
            </li>

            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <MdHomeFilled size={18} />
                </span>
                <span className="menu-link-text">Home</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <FaNewspaper size={20} />
                </span>
                <span className="menu-link-text">News</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <FaRegRectangleList size={20} />
                </span>
                <span className="menu-link-text">Stats</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <IoPersonSharp size={18} />
                </span>
                <span className="menu-link-text">Account</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <IoMdNotifications size={20} />
                </span>
                <span className="menu-link-text">Notifications</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
