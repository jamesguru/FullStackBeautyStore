const Banner = () => {
  return (
    <div className="flex items-center m-[30px]">
        <div className="relative w-[50%] p-2">
      <div className="bg-[#e9cfe2] rounded-tl-[300px] rounded-tr-[400px] rounded-bl-[300px] rounded-br-[50px] w-full h-[500px] absolute top-0 left-0"></div>
      <img
        src="/hero.png"
        alt=""
        className="relative h-[400px] w-[500px] object-contain m-[20px]"
      />
    </div>
      <div className="m-[30px] text-[#444] font-semibold text-[50px] w-[50%]">
        <span>LET`S MAKE YOUR SKIN FLOURISH WITH OUR PRODUCTS</span>
      </div>
    </div>
  );
};

export default Banner;
