import { handleClientScriptLoad } from "next/script";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useState, useCallback } from 'react';


const Page = {
  record: "record",
  board:"board",
  analysis:"analysis",
}

function Layout({ children }) {
  const [currentPage, setCurrentPage] = useState(0);

  const setPage = ((value) => {
    console.log(value);
    setCurrentPage(value);
  });


  return (
    <div className="min-w-full bg-gray-100">
      <TopBar />
      <Sidebar setCurrentPage={setPage}/>

      <div className="pt-14 md:pl-72 pt-30">
        {children[currentPage]}
      </div>
    </div>
  );
}

export default Layout;
