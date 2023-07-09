import Navigation from "../components/Navigation";
import Data from "../components/Data";

const Dashboard = () => {
  return (
    <>
      <div className="h-auto w-screen bg-gray-200 p-4 md:p-8 flex ">
      <Navigation />
      <Data />

      
      </div>
    </>
  );
};

export default Dashboard;
