import ArrowDownBlack from "components/atoms/arrow-down-black";

const TopNavControl = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="overflow-hidden w-[50px] h-[50px]">
          <img src="/user.png" className="object-contain" />
        </div>
        <p className="text-xs">
          Welcome, <strong>Alex Martin</strong>. Here’s your personalized
          financial dashboard
        </p>
      </div>
      <ul className="text-xs flex items-center gap-3">
        <li className="cursor-pointer flex items-center gap-1">
          Currency: GBP <ArrowDownBlack />
        </li>
        <li className="cursor-pointer flex items-center gap-1">
          My Account <ArrowDownBlack />
        </li>
      </ul>
    </div>
  );
};

export default TopNavControl;
