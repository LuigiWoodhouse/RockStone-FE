import {
  MicrophoneIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";

function Sidebar(props) {
  return (
    <div className="inset-y-0 w-72 -left-72 fixed md:left-0 bg-white shadow-md">
      <div className="flex items-center space-x-3  mb-4 py-4 px-3">
        <span className="w-10 h-10 bg-indigo-500  text-3xl font-medium text-white rounded-lg flex items-center justify-center">
          R
        </span>
        <span className="text-xl font-medium">RockStone.ai</span>
      </div>

      <div className="divide-y px-3 flex flex-col">
        <div className="pt-5 ">
          <div 
          onClick={()=>props.setCurrentPage(0)}
          className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition"
         
          >
            <div className="">
              <MicrophoneIcon className="w-5 h-5 " />
            </div>
            <div className="">Record Audio</div>
          </div>

          <div 
          onClick={()=>props.setCurrentPage(1)}
          className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <UserGroupIcon className="w-5 h-5 " />
            </div>
            <div className="">Organize Tickets</div>
          </div>

          <div 
          onClick={()=>props.setCurrentPage(2)}
          className="flex items-center space-x-2 rounded-md text-gray-600 px-2 py-2 cursor-pointer hover:bg-indigo-100 hover:text-indigo-900 transition">
            <div className="">
              <ChartBarIcon className="w-5 h-5 " />
            </div>
            <div className="">Analytics</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
