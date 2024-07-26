import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] bg-white shadow-md px-6">
      <div className="cursor-pointer m-2">
        <Link to="/">
          <img src="/blisslogo1.png" height="150px" width="200px" alt="" />
        </Link>
      </div>
      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="Search products"
          className="p-[15px] border-2 border-[#f096dd] border-solid w-[500px] outline-none rounded-lg mr-[-30px]"
        />
        <FaSearch className="text-[20px] cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="relative group">
          <Badge badgeContent={5} color="secondary">
            <ShoppingBasketIcon className="text-[#e455c5] group-hover:text-pink-600 transition duration-300" />
          </Badge>
        </Link>
        <Link to="/login" className="flex items-center space-x-2 border border-pink-300 p-2 rounded-lg hover:bg-pink-100 transition duration-300">
          <FaUser className="text-[#e455c5] hover:text-pink-600 transition duration-300" />
          <span className="text-[#e455c5] hover:text-pink-600 transition duration-300 font-semibold">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
