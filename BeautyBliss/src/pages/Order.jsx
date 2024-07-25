import { FaCheckCircle } from "react-icons/fa";
import {Link} from "react-router-dom";

const Order = () => {
  const orders = [
    {
      items: [
        {
          image: "/lotion2.jpg",
          name: "Garnier Even & Matte Vitamin C Cleansing Foam",
          quantity: "1 x 500ml",
          price: "$100",
        },
      ],
      shipping: {
        name: "John Doe",
        address: "123 Main Street, Apt 4B",
        city: "Cityville, ST 12345",
        country: "United States",
      },
      paymentMethod: "Credit Card (Visa ending in 1234)",
      subtotal: "$100",
      shippingCost: "$10",
      total: "$110",
    },
    {
      items: [
        {
          image: "/lotion1.jpg",
          name: "Pantene Pro-V Daily Moisture Renewal Shampoo",
          quantity: "2 x 250ml",
          price: "$50",
        },
        {
          image: "/lotion2.jpg",
          name: "Pantene Pro-V Daily Moisture Renewal Conditioner",
          quantity: "2 x 250ml",
          price: "$60",
        },
      ],
      shipping: {
        name: "Jane Smith",
        address: "456 Elm Street, Suite 12",
        city: "Townsville, TS 54321",
        country: "United States",
      },
      paymentMethod: "Credit Card (Mastercard ending in 5678)",
      subtotal: "$110",
      shippingCost: "$15",
      total: "$125",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Thank You for Your Orders!</h1>
          <p className="text-gray-600 mt-2">
            Here are the details of your recent orders.
          </p>
        </div>

        {orders.map((order, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Order #{index + 1}</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
                <div className="flex flex-col space-y-4">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-gray-200 pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1 ml-4">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <p className="text-gray-600">{item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Shipping Information
                </h3>
                <p className="text-gray-600">{order.shipping.name}</p>
                <p className="text-gray-600">{order.shipping.address}</p>
                <p className="text-gray-600">{order.shipping.city}</p>
                <p className="text-gray-600">{order.shipping.country}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
                <p className="text-gray-600">{order.paymentMethod}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium">Subtotal:</span>
                  <span className="text-lg font-semibold">
                    {order.subtotal}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium">Shipping:</span>
                  <span className="text-lg font-semibold">
                    {order.shippingCost}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-lg font-bold">{order.total}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-8 text-center">
          <Link to="/">
            <button className="bg-[#ef93db] text-white p-3 rounded-lg font-semibold">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
