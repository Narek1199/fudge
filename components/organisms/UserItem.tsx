import styles from "styles/components/UserItem.module.scss";

const UserItem = () => {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div className="overflow-hidden w-[50px] h-[50px]">
        <img src="/user.png" className="object-contain" />
      </div>
      <div className="flex flex-col gap-1">
        <strong className="text-xs whitespace-nowrap">Don Corleone</strong>
        <small className={`text-gray-400 text-xs ${styles.status}`}>
          Online
        </small>
      </div>
    </div>
  );
};

export default UserItem;
