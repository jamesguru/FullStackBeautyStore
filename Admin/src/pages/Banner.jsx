import { FaPlus } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="flex justify-evenly m-[10%]">
      <div className="mr-[50px]">
        <h2 className="text-xl font-semibold mb-4">Active Banners</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <img
              src="https://images.pexels.com/photos/8054395/pexels-photo-8054395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product"
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold mb-2">
                Garnier Even & Matte Vitamin C Cleansing Foam
              </h3>
              <p className="text-gray-600 mb-2">
                Garnier Even & Matte Vitamin C Cleansing Foam 500ml
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <img
              src="https://images.pexels.com/photos/8054395/pexels-photo-8054395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Product"
              className="w-32 h-32 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-semibold mb-2">
                Garnier Even & Matte Vitamin C Cleansing Foam
              </h3>
              <p className="text-gray-600 mb-2">
                Garnier Even & Matte Vitamin C Cleansing Foam 500ml
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex-1 bg-white p-5 ">
          <div className="">
            <div className="flex flex-col mb-5">
              <span className="font-semibold">image:</span>
              <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md">
                <FaPlus className="flex items-center justify-center m-[30%] text-[20px] cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col justify-between mb-5">
              <span className="font-semibold">Title:</span>
              <input
                type="text"
                className="w-[250px] outline-none border-b-2 border-[#444] border-solid"
              />
            </div>
            <div className="flex flex-col justify-between mb-5">
              <span className="font-semibold">Subtitle</span>
              <textarea
                name=""
                id=""
                className="w-[250px] outline-none border-b-2 border-[#444] border-solid"
              ></textarea>
            </div>

            <button className="bg-[#1e1e1e] w-[200px] p-[10px] text-white">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
