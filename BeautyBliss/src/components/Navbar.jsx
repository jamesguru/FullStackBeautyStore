import { FaSearch} from 'react-icons/fa';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="m-2">
        <img src="/blisslogo1.png" height="150px" width="200px" alt="" />
      </div>
      <div className="flex items-center m-2">
            <input type="text" placeholder="Search products" className="p-[15px] border-2 border-[#f096dd] border-solid w-[500px] outline-none rounded-lg mr-[-30px]" />
            <FaSearch className='text-[20px] cursor-pointer' />
      </div>
      <div className="flex items-center mr-[20px]">
       <Badge badgeContent={5} color='secondary' >
       <ShoppingBasketIcon className='text-[#e455c5]'/>
       </Badge>
        <button className='bg-[#ef93db] p-[10px] ml-[20px] text-white w-[150px] cursor-pointer'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
