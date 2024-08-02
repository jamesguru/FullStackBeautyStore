import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Products = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product Name", width: 200 },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price ($)", width: 130 },
    { field: "stock", headerName: "In Stock", width: 100 },

    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                Edit
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer m-2" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Hydrating Facial Cleanser",
      brand: "CeraVe",
      category: "Cleanser",
      price: 15.99,
      stock: 20,
    },
    {
      id: 2,
      name: "Retinol Serum",
      brand: "The Ordinary",
      category: "Serum",
      price: 9.99,
      stock: 35,
    },
    {
      id: 3,
      name: "Daily Moisturizing Lotion",
      brand: "Aveeno",
      category: "Moisturizer",
      price: 8.99,
      stock: 50,
    },
    {
      id: 4,
      name: "Ultra Light Sunscreen SPF 50",
      brand: "Neutrogena",
      category: "Sunscreen",
      price: 12.99,
      stock: 40,
    },
    {
      id: 5,
      name: "Vitamin C Serum",
      brand: "TruSkin",
      category: "Serum",
      price: 19.99,
      stock: 25,
    },
    {
      id: 6,
      name: "Soothing Facial Toner",
      brand: "Thayers",
      category: "Toner",
      price: 10.99,
      stock: 30,
    },
    {
      id: 7,
      name: "Anti-Aging Eye Cream",
      brand: "Olay",
      category: "Eye Cream",
      price: 24.99,
      stock: 15,
    },
    {
      id: 8,
      name: "Exfoliating Scrub",
      brand: "St. Ives",
      category: "Exfoliant",
      price: 6.99,
      stock: 45,
    },
    {
      id: 9,
      name: "Oil-Free Acne Wash",
      brand: "Neutrogena",
      category: "Cleanser",
      price: 7.99,
      stock: 28,
    },
    {
      id: 10,
      name: "Hydro Boost Water Gel",
      brand: "Neutrogena",
      category: "Moisturizer",
      price: 18.99,
      stock: 22,
    },
  ];

  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Products</h1>
        <Link to="/newproduct">
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

export default Products;
