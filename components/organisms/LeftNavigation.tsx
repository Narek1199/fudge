import Logo from "components/atoms/logo";
import ArrowRightFill from "components/atoms/arrow-right-fill";

import animatedStyles from "styles/components/Animation.module.scss";

const LeftNavigation = () => {
  return (
    <div
      className={`hidden md:flex flex-col w-[270px] p-5 items-center ${animatedStyles.fade_in}`}
    >
      <div className="text-xs mb-32">
        <Logo height={80} width={80} />
      </div>
      <ul className="text-white w-full">
        <li className="font-thin text-gray-200 mb-1 py-2 px-10 cursor-pointer hover:bg-neutral-100 hover:bg-opacity-20 bg-neutral-100 bg-opacity-20 rounded-xl flex justify-between items-center">
          Dashboard <ArrowRightFill />
        </li>
        <li className="font-thin text-gray-200 mb-1 py-2 px-10 cursor-pointer hover:bg-neutral-100 hover:bg-opacity-20 rounded-xl flex justify-between items-center">
          Advisors
        </li>
        <li className="font-thin text-gray-200 mb-1 py-2 px-10 cursor-pointer hover:bg-neutral-100 hover:bg-opacity-20 rounded-xl flex justify-between items-center">
          My Documents
        </li>
        <li className="font-thin text-gray-200 mb-1 py-2 px-10 cursor-pointer hover:bg-neutral-100 hover:bg-opacity-20 rounded-xl flex justify-between items-center">
          News Feed
        </li>
        <li className="font-thin text-gray-200 mb-1 py-2 px-10 cursor-pointer hover:bg-neutral-100 hover:bg-opacity-20 rounded-xl flex justify-between items-center">
          Support
        </li>
      </ul>
    </div>
  );
};

export default LeftNavigation;
