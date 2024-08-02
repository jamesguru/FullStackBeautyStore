import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {FaCheckCircle, FaCheckDouble, FaClock } from "react-icons/fa";

const Orders = () => {
  const columns = [
    { field: "id", headerName: "Order ID", width: 100 },
    { field: "customerName", headerName: "Customer Name", width: 200 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "amount", headerName: "Amount ($)", width: 130 },
    { field: "total", headerName: "Total ($)", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "Pending" ? (
              <FaClock className="text-yellow-500 text-[25px] cursor-pointer mt-2" />
            ) : (
              <FaCheckDouble className="text-green-500 text-[25px]" />
            )}
          </>
        );
      },
    },
    {
      field: "Deliver",
      headerName: "Mark as Delivered",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "Pending" ? (
              <FaCheckCircle className=" text-[25px] cursor-pointer mt-2" />
            ) : (
             ""
            )}
          </>
        );
      },
    },
    
  ];

  const rows = [
    {
      id: 1,
      customerName: "John Doe",
      date: "2024-07-01",
      amount: 59.99,
      total: 59.99,
      status: "Delivered",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      date: "2024-07-03",
      amount: 45.49,
      total: 45.49,
      status: "Pending",
    },
    {
      id: 3,
      customerName: "Michael Brown",
      date: "2024-07-05",
      amount: 82.75,
      total: 82.75,
      status: "Delivered",
    },
    {
      id: 4,
      customerName: "Emily White",
      date: "2024-07-07",
      amount: 33.99,
      total: 33.99,
      status: "Pending",
    },
    {
      id: 5,
      customerName: "Daniel Johnson",
      date: "2024-07-09",
      amount: 25.00,
      total: 25.00,
      status: "Delivered",
    },
  ];

  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Orders</h1>
        <Link to="/neworder">
          <button className="bg-[#1e1e1e] p-[10px] font-semibold text-white cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="m-[30px]">
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default Orders;
