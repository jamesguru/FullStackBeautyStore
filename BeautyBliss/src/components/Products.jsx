import StarRatings from "react-star-ratings";
const Products = () => {
  return (
    <div className="flex items-center flex-wrap mx-[20px] my-[30px]">
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/serum.jpg" height="250px" width="350px" alt="" />
        <h2 className="font-semibold text-[18px]">
          Garnier Even & Matte Vitamin C Micellar Cleansing Water
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={2}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/foundation.jpg" height="250px" width="350px" alt="" />
        <h2 className="font-semibold text-[18px]">
          Maybelline Fit Me Concealer - 40 Caramel
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={2}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/serum1.jpg" height="250px" width="350px" alt="" />
        <h2 className="font-semibold text-[18px]">
          Garnier Even & Matte Vitamin C Booster Serum 30ml.
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={2}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/lotion1.jpg" height="250px" width="350px" alt="" />
        <h2 className="font-semibold text-[18px]">
          Vaseline Lotion Dry Skin Void 100ml
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={5}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/lotion3.jpg" height="250px" width="350px" alt=""/>
        <h2 className="font-semibold text-[18px]">
        Vaseline Lotion Intensive Care Advanced Repair Unscented, Aloe Soothe, Cocoa Glow
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={5}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/serum.jpg" height="250px" width="350px" alt="" />
        <h2 className="font-semibold text-[18px]">
          Garnier Even & Matte Vitamin C Micellar Cleansing Water
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={2}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/foundation.jpg" height="250px" width="350px" alt="" />
        <h2 className="font-semibold text-[18px]">
          Maybelline Fit Me Concealer - 40 Caramel
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={2}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/serum1.jpg" height="250px" width="350px" alt="" />
        <h2 className="font-semibold text-[18px]">
          Garnier Even & Matte Vitamin C Booster Serum 30ml.
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={2}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/lotion1.jpg" height="250px" width="350px" alt="" />
        <h2 className="font-semibold text-[18px]">
          Vaseline Lotion Dry Skin Void 100ml
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={5}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
      <div className="flex flex-col h-[500px] w-[250px] m-[20px]">
        <img src="/lotion3.jpg" height="250px" width="350px" alt=""/>
        <h2 className="font-semibold text-[18px]">
        Vaseline Lotion Intensive Care Advanced Repair Unscented, Aloe Soothe, Cocoa Glow
        </h2>
        <StarRatings
          numberOfStars={5}
          rating={5}
          isSelectable={true}
          starRatedColor="yellow"
          starDimension="30px"
          starSpacing="2px"
        />
      </div>
    </div>
  );
};

export default Products;
