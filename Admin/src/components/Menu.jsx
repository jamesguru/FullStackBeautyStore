import {
  FaBox,
  FaCalendarAlt,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [activeLink, setActiveLink] = useState("/");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="h-[100vh] bg-gray-100 p-[20px] w-[350px] shadow-lg">
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <li
            className={`flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100      
            ${
              activeLink === "/"
                ? "bg-[#ef93db] p-[10px] w-[200px] text-white"
                : ""
            }
            
            `}
          >
            <FaHome
              className={`mr-[15px] text-white ${
                activeLink === "/" ? "text-white" : "text-red-500"
              }`}
            />
            Home
          </li>
        </Link>
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaUser className="mr-[15px]  text-[#ef93db] " />
          Profile
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <Link to="/users" onClick={() => handleLinkClick("/donors")}>
          <li
            className={`flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100
            
            ${
              activeLink === "/users"
                ? "bg-red-300 p-[10px] w-[200px] text-white"
                : ""
            }
            
            `}
          >
            <FaBox
              className={`mr-[15px] text-[#ef93db]  ${
                activeLink === "/users" ? "text-white" : "text-red-500"
              }`}
            />
            Users
          </li>
        </Link>

        <Link to="/products" onClick={() => handleLinkClick("/prospects")}>
          <li
            className={`flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100
            
            ${
              activeLink === "/products"
                ? "bg-red-300 p-[10px] w-[200px] text-white"
                : ""
            }
            
            `}
          >
            <FaUsers
              className={`mr-[15px] text-[#ef93db]  ${
                activeLink === "/products" ? "text-white" : "text-red-500"
              }`}
            />
            Products
          </li>
        </Link>

        <Link to="/orders" onClick={() => handleLinkClick("/prospects")}>
          <li
            className={`flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100
            
            ${
              activeLink === "/orders"
                ? "bg-red-300 p-[10px] w-[200px] text-white"
                : ""
            }
            
            `}
          >
            <FaClipboardList
              className={`mr-[15px] text-[#ef93db]  ${
                activeLink === "/orders" ? "text-white" : "text-red-500"
              }`}
            />
            Orders
          </li>
        </Link>


        <hr className="w-full my-[20px] border-gray-300" />

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaElementor className="mr-[15px] text-[#ef93db] " />
          Elements
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaCog className="mr-[15px] text-[#ef93db] " />
          Settings
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaHdd className="mr-[15px] text-[#ef93db] " />
          Backups
        </li>
        <hr className="w-full my-[20px] border-gray-300" />
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaChartBar className="mr-[15px] text-[#ef93db] " />
          Charts
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaClipboard className="mr-[15px] text-[#ef93db] " />
          All logs
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100">
          <FaCalendarAlt className="mr-[15px] text-[#ef93db] " />
          Calendar
        </li>
      </ul>
    </div>
  );
};

export default Menu;
