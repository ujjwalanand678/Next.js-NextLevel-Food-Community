const loading = () => {
  return (
    <div className="
      flex items-center justify-center 
      h-[60vh] text-center
      text-white text-xl font-semibold
      tracking-wide
      bg-transparent
      animate-pulse
    ">
      Fetching Meals, Please Wait...
    </div>
  );
};

export default loading;
