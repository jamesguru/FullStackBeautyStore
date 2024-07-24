import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="min-h-screen  p-8">
      <h3 className="text-[18px] font-bold mb-6">Shopping Cart</h3>

      <div className="flex gap-8">
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/lotion2.jpg"
                alt="Product"
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Garnier Even & Matte Vitamin C Cleansing Foam
                </h3>
                <p className="text-gray-600 mb-2">
                  1 Garnier Even & Matte Vitamin C Cleansing Foam 500ml
                </p>
                <div className="flex items-center">
                  <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full text-3xl" />
                  <span className="text-lg font-semibold mx-4">1</span>
                  <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full text-3xl" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">$100</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/lotion2.jpg"
                alt="Product"
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Garnier Even & Matte Vitamin C Cleansing Foam
                </h3>
                <p className="text-gray-600 mb-2">
                  1 Garnier Even & Matte Vitamin C Cleansing Foam 500ml
                </p>
                <div className="flex items-center">
                  <FaMinus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full text-3xl" />
                  <span className="text-lg font-semibold mx-4">1</span>
                  <FaPlus className="bg-[#ef93db] text-white cursor-pointer p-2 rounded-full text-3xl" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">$100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium">Subtotal:</span>
              <span className="text-lg font-semibold">$100</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Shipping:</span>
              <span className="text-lg font-semibold">$10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-lg font-bold">$110</span>
            </div>
            <button className="bg-[#ef93db] text-white p-3 w-full rounded-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
