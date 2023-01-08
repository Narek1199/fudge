const CommentItem = () => {
  return (
    <div className="flex gap-2 mb-5">
      <div className="overflow-hidden w-[100px] h-[100px]">
        <img src="/user.png" className="object-contain" />
      </div>
      <div className="flex flex-col gap-2">
        <strong className="text-xs">Jack Sparrows</strong>
        <small className="text-gray-400 text-xs">2 hours ago</small>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default CommentItem;
