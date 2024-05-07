import { Sidebar } from "flowbite-react";
import { HiBookOpen } from "react-icons/hi";

import "./App.css";

const App = () => {
  return (
    <div className="app grid grid-areas-app grid-cols-app grid-rows-app h-[calc(100dvh)] lg:grid-areas-appLg lg:grid-cols-appLg md:grid-areas-appMd md:grid-cols-appMd">
      <div className="sidebar bg-gray-200 grid-in-sidebar hidden lg:block z-20">
        <Sidebar>
          <Sidebar.Logo href="#" img={""}>
            <HiBookOpen size={24} />
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#">Item 1</Sidebar.Item>
              <Sidebar.Item href="#">Item 2</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="header bg-blue-600 text-white text-center grid-in-header">
        Header
      </div>
      <div className="list bg-white flex flex-col justify-between overflow-y-auto grid-in-list">
        <div className="bg-gray-800 text-white h-[48px] flex-shrink-0 sticky top-0">
          List Top
        </div>
        <div className="bg-gray-800 text-white h-[48px] flex-shrink-0 sticky bottom-0">
          List Bottom
        </div>
      </div>
      <div className="content bg-gray-100 overflow-y-auto grid-in-content hidden md:flex md:flex-col md:justify-between z-10">
        <div className="bg-gray-800 text-white h-[48px] flex-shrink-0 sticky bottom-0">
          Content Bottom
        </div>
      </div>
    </div>
  );
};

export default App;
