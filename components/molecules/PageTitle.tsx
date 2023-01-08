const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3 pt-4">
      <h1 className="text-xl whitespace-nowrap">{title}</h1>
      <div className="h-0.5 w-full bg-[#A5A5A5]" />
    </div>
  );
};

export default PageTitle;
