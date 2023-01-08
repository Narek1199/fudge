import animatedStyles from "styles/components/Animation.module.scss";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div className="h-full w-[272px] p-5 bg-transparent" />
      <div
        className={`bg-white h-[8px] w-[20px] rounded-lg self-center ${animatedStyles.content_animate}`}
      />
    </div>
  );
};

export default Loader;
