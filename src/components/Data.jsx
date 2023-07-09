import Avatar from "../assets/profile.png";
import Vector from "../assets/Vector.svg";
import Search from "../assets/search.svg";
import Revenue from "../assets/revenue.svg";
import Transactionb from "../assets/total_transactions_icon.svg";
import Likes from "../assets/likes.svg";
import Users from "../assets/users.svg";
import Dropdown from "../assets/dropdown.svg";
import Ellipse1 from "../assets/ellipse1.svg";
import Ellipse2 from "../assets/ellipse2.svg";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logOutUser } from "../features/userSlice";
import { signOut } from "firebase/auth";



const Data = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
    signOut(auth)
      .then(() => {
        // Logout successful
      })
      .catch((error) => {
        // Handle logout error
        console.log("Logout error:", error);
      });
  };
  return (
    <div className="w-screen md:ml-8 md:py-4">
      <div className="header flex justify-between">
        <p className="font-montserrat text-lg font-bold leading-7 tracking-normal">
          Dashboard
        </p>

        <div className="flex justify-center items-center">
          <label className="relative block w-2/4">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <img
                className="h-5 w-5 fill-slate-300"
                src={Search}
                alt="search"
              />
            </span>
            <input
              className="placeholder:text-slate-400 placeholder:font-lato block bg-white w-full border border-slate-300 rounded-xl py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search..."
              type="text"
              name="search"
            />
          </label>

          <img className="px-6" src={Vector} />

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>
                <img
                  className="inline-block h-6 w-6 rounded-full"
                  src={Avatar}
                  alt="profile_pic"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Item className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <p className="cursor-pointer bg-gray-100 text-gray-900 block px-4 py-2 text-sm">{user.name}</p>
                  <p className="cursor-pointer bg-gray-100 text-gray-900 block px-4 py-2 text-sm" onClick={handleLogout}>logout</p>

                </div>
              </Menu.Item>
            </Transition>
          </Menu>


        </div>
      </div>

      <div className="cards flex justify-between flex-col md:flex-row py-4">
        <div className="card w-full md:w-56 mb-4  h-28 p-4 bg-green-200 rounded-2xl">
          <div className="card_icon flex flex-row-reverse">
            <img className="w-7 h-5" src={Revenue} alt="Revenue" />
          </div>
          <p className="font-lato text-sm font-normal leading-5 tracking-normal">
            Total Revenues
          </p>
          <p className="font-open-sans text-xl font-bold leading-8 tracking-normal">
            $2,129,430
          </p>
        </div>

        <div className="card w-full md:w-56 mb-4  h-28 p-4 bg-yellow-100 rounded-2xl">
          <div className="card_icon flex flex-row-reverse">
            <img className="w-7 h-5" src={Transactionb} alt="Revenue" />
          </div>
          <p className="font-lato text-sm font-normal leading-5 tracking-normal">
            Total Transactions
          </p>
          <p className="font-open-sans text-xl font-bold leading-8 tracking-normal">
            1,520
          </p>
        </div>
        <div className="card w-full md:w-56 mb-4 h-28 p-4 bg-red-100 rounded-2xl">
          <div className="card_icon flex flex-row-reverse">
            <img className="w-7 h-5" src={Likes} alt="Revenue" />
          </div>
          <p className="font-lato text-sm font-normal leading-5 tracking-normal">
            Total Likes
          </p>
          <p className="font-open-sans text-xl font-bold leading-8 tracking-normal">
            9,721
          </p>
        </div>
        <div className="card w-full md:w-56 mb-4  h-28 p-4 bg-indigo-200 rounded-2xl">
          <div className="card_icon flex flex-row-reverse">
            <img className="w-7 h-5" src={Users} alt="Revenue" />
          </div>
          <p className="font-lato text-sm font-normal leading-5 tracking-normal">
            Total Users
          </p>
          <p className="font-open-sans text-xl font-bold leading-8 tracking-normal">
            892
          </p>
        </div>
      </div>




      <div className="activities_card bg-white rounded-2xl p-8">
        <div className="flex justify-between mb-4">
          <div className="chart_details">
            <p className="font-montserrat text-base font-bold leading-6 tracking-normal">
              Activities
            </p>
            <div className="flex">
              <p className="font-montserrat text-sm font-normal leading-5 tracking-normal mr-2">
                May - June 2021
              </p>
              <img src={Dropdown} alt="Dropdown" />
            </div>
          </div>
          <div className="ellipse w-48 flex flex-col md:flex-row justify-evenly">
            <div className="ellipse1 flex justify-center items-center">
              
              <img src={Ellipse1} alt="Ellipse1" />
              <p className="font-montserrat text-sm font-normal leading-5 tracking-normal px-2">
                Guest
              </p>
            </div>
            <div className="ellipse1 flex justify-center items-center">
              <img src={Ellipse2} alt="Ellipse2" />
              <p className="font-montserrat text-sm font-normal leading-5 tracking-normal px-2">
                User
              </p>
            </div>
          </div>
        </div>
        <div>
          <LineChart />
        </div>
      </div>
      <div className="bottom_cards flex flex-col md:flex-row justify-between">
        <div className="top_products_card w-full bg-white mt-4 mr-4 md:w-1/2 p-4 rounded-2xl">
          <div className="chart_details flex justify-between">
            <p className="font-montserrat text-base font-bold leading-6 tracking-normal">
              Top products
            </p>
            <div className="flex justify-center items-center">
              <p className="font-montserrat text-sm font-normal leading-5 tracking-normal mr-2">
                May - June 2021
              </p>
              <img src={Dropdown} alt="Dropdown" />
            </div>
          </div>

          <div className="pie_chart_details">
            <div className="piechart">
              <PieChart />
            </div>
            {/* <div className="details">

            </div> */}
          </div>
        </div>
        <div className="schedules_card w-full bg-white mt-4 p-4 rounded-2xl md:w-1/2">
          <div className="chart_details flex justify-between">
            <p className="font-montserrat text-base font-bold leading-6 tracking-normal">
              Today’s schedule
            </p>
            <div className="flex justify-center items-center">
              <p className="font-montserrat text-sm font-normal leading-5 tracking-normal mr-2">
                May - June 2021
              </p>
              <img src={Dropdown} alt="Dropdown" />
            </div>
          </div>

          <div className="mb-4 mt-8 p-2 border-l-4 border-indigo-500">
            <p className="font-lato text-base font-bold leading-17 tracking-normal text-gray-600">
              Meeting with suppliers from Kuta Bali
            </p>
            <p className="font-lato text-base font-medium leading-17 tracking-normal text-gray-400">
              14.00-15.00
            </p>
            <p className="font-lato text-base font-medium leading-17 tracking-normal text-gray-400">
              at Sunset Road, Kuta, Bali{" "}
            </p>
          </div>
          <div className="p-2 border-l-4 border-indigo-500">
            <p className="font-lato text-base font-bold leading-17 tracking-normal text-gray-600">
              Check operation at Giga Factory 1
            </p>
            <p className="font-lato text-base font-medium leading-17 tracking-normal text-gray-400">
              18.00-20.00
            </p>
            <p className="font-lato text-base font-medium leading-17 tracking-normal text-gray-400">
              at Central Jakarta{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
