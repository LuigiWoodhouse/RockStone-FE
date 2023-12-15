import { SearchIcon, BellIcon } from "@heroicons/react/outline";

function TopBar() {
  return (
    <div className="ht-16 md:h-40 bg-white shadow-sm md:pl-72 fixed w-full pr-5 md:pt-5">
      <div className="flex items-center space-x-3 py-2 px-2 md:hidden">
        <span className="w-10 h-10 bg-indigo-500  text-3xl font-medium text-white rounded-lg flex items-center justify-center">
          R
        </span>
        <span className="text-xl font-medium">RockStone.</span>
      </div>
      <div className="md:flex items-center justify-between hidden">
      </div>

      <div className="md:flex flex-col pl-5 pt-8 hidden">
        <div>
          <h3 className="text-sm text-gray-500">Your Tickets Organized Right Here</h3>
          <h3 className="text-normal text-gray-900 text-2xl">
            Track your Organization
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
