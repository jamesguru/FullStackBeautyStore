import { FaMinus, FaPlus } from "react-icons/fa";
import StarRatings from "react-star-ratings";
const Product = () => {
  return (
    <div className="h-auto flex justify-stretch p-[30px]">
      <div className="flex-1 h-[500px] w-[600px]">
        <img src="/lotion2.jpg" alt="" />
      </div>
      <div className="flex flex-1 flex-col ml-10">
        <h2 className="text-[25px] font-semibold mb-[20px]">
          Garnier Even & Matte Vitamin C Cleansing Foam
        </h2>
        <span>
          GARNIER Even & Matte Gentle Cleansing Foam from L`Oreal East Africa is
          enriched with pure lemon essence to cleanse and clarify skin.A triple
          dose of Vitamin C for fairer glowing complexion and a smoother , more
          even skin tone. Visibly restores skin`s radiance. Choose from their
          wide assortment through Jumia Kenya and enjoy fast, reliable and
          convenient online shopping. Order for this Even & Matte Gentle
          Cleansing Foam online from Jumia Kenya and have it delivered to your
          doorstep DID YOU KNOW Lemon is the King of Citrus fruits, with the
          highest content of vitamin c and anti oxidants among common citrus
          fruits
        </span>

        <div className="flex items-center my-6">
          <StarRatings
            numberOfStars={5}
            rating={2}
            isSelectable={true}
            starRatedColor="yellow"
            starDimension="30px"
            starSpacing="2px"
          />
          <span>(6)</span>
        </div>

        <div className="h-52 w-96 border-2 border-gray-300 rounded-lg shadow-md my-4 p-6 bg-white">
          <h2 className="flex items-center justify-center font-semibold text-lg text-gray-700 mb-4">
            WHAT’S IN THE BOX
          </h2>
          <hr className="mb-4" />
          <span className="block text-gray-600 text-base">
            1 Garnier Even & Matte Vitamin C Cleansing Foam 500ml
          </span>
        </div>

        <div className="inline-flex items-center bg-[#ef93db] text-white font-semibold text-sm px-6 py-4 rounded-full shadow-md">
          Wholesale Available: 10 items as from $100
        </div>

        <div className="flex items-center my-5 p-4 ">
          <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
          <span className="text-lg font-semibold mx-4">1</span>
          <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
        </div>

        <button className="bg-[#1e1e1e] p-[10px] w-[200px] text-white cursor-pointer">
          Add to Cart
        </button>

        <hr className="my-6" />

        <div className="flex flex-col">
          <h2 className="font-semibold text-[18px]">Reviews</h2>
          <div className="flex items-center">
            <StarRatings
              numberOfStars={5}
              rating={2}
              isSelectable={true}
              starRatedColor="yellow"
              starDimension="30px"
              starSpacing="2px"
            />
            <span className="font-semibold mx-[20px]">James K.</span>
            <span>Good Product.</span>
          </div>
          <div className="flex items-center">
            <StarRatings
              numberOfStars={5}
              rating={5}
              isSelectable={true}
              starRatedColor="yellow"
              starDimension="30px"
              starSpacing="2px"
            />
            <span className="font-semibold mx-[20px]">Allan</span>
            <span>Nice.</span>
          </div>

          <div className="flex items-center">
            <StarRatings
              numberOfStars={5}
              rating={3}
              isSelectable={true}
              starRatedColor="yellow"
              starDimension="30px"
              starSpacing="2px"
            />
            <span className="font-semibold mx-[20px]">Kelly</span>
            <span>Nice.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
