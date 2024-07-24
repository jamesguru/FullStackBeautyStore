import { FaCheckCircle } from "react-icons/fa";

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Thank You for Your Order!</h1>
          <p className="text-gray-600 mt-2">
            Your order has been successfully placed.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
            <div className="flex flex-col space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <img
                  src="/lotion2.jpg"
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h4 className="text-lg font-semibold">
                    Garnier Even & Matte Vitamin C Cleansing Foam
                  </h4>
                  <p className="text-gray-600">1 x 500ml</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">$100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
            <p className="text-gray-600">John Doe</p>
            <p className="text-gray-600">123 Main Street, Apt 4B</p>
            <p className="text-gray-600">Cityville, ST 12345</p>
            <p className="text-gray-600">United States</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
            <p className="text-gray-600">Credit Card (Visa ending in 1234)</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">Subtotal:</span>
              <span className="text-lg font-semibold">$100</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">Shipping:</span>
              <span className="text-lg font-semibold">$10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-lg font-bold">$110</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-[#ef93db] text-white p-3 rounded-lg font-semibold">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
