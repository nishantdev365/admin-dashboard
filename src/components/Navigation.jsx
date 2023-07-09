import { useState } from 'react';
import Dashboard from "../assets/dashboard_icon.svg";
import Transaction from "../assets/transaction_icon.svg";
import Scheduled from "../assets/schedule_icon.svg";
import User from "../assets/user.svg";
import Setting from "../assets/setting.svg";
import Close from "../assets/close.png";
import Menu from "../assets/menu.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className="fixed opacity-50 z-40 bottom-4 right-4 bg-black text-white px-4 py-2 rounded md:hidden" onClick={toggleMenu}>
      {isMenuOpen ? <img src={Close} alt="Close Menu" style={{ width: '16px', height: '16px' }}/> : <img src={Menu} alt="Open Menu" style={{ width: '16px', height: '16px' }} />}
      </button>
      <div className={`absolute md:relative z-40 sidebar w-3/5 md:w-72 h-auto bg-black rounded-3xl ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <p className="font-montserrat text-3xl font-bold leading-44 tracking-normal text-white flex justify-start mt-12 ml-10 ">Board.</p>
        <div className="flex flex-col justify-between h-screen">
          <div className="nav_list ml-10 text-white font-montserrat font-normal text-xl leading-5 tracking-normal">
            <ul className="mt-12">
              <li className="mb-8 flex justify-start items-start"><div className="mr-4"><img src={Dashboard} alt="" /></div> <div>Dashboard</div></li>
              <li className="mb-8 flex justify-start items-start"><div className="mr-4"><img src={Transaction} alt="" /></div> <div>Transactions</div></li>
              <li className="mb-8 flex justify-start items-start"><div className="mr-4"><img src={Scheduled} alt="" /></div> <div>Schedules</div></li>
              <li className="mb-8 flex justify-start items-start"><div className="mr-4"><img src={User} alt="" /></div> <div>Users</div></li>
              <li className="mb-8 flex justify-start items-start"><div className="mr-4"><img src={Setting} alt="" /></div> <div>Settings</div></li>
            </ul>
          </div>
          <div className="ml-10">
            <p className="text-white font-montserrat text-sm font-normal leading-4 tracking-normal text-left mb-2">Help</p>
            <p className="text-white font-montserrat text-sm font-normal leading-4 tracking-normal text-left">Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

