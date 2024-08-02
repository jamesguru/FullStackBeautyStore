import { LineChart } from "@mui/x-charts/LineChart";
import { DataGrid } from "@mui/x-data-grid";

const Home = () => {
  // Sample data for recent orders
  const orders = [
    {
      id: 1,
      orderId: "001",
      customer: "John Doe",
      amount: 100,
      date: "2023-07-01",
    },
    {
      id: 2,
      orderId: "002",
      customer: "Jane Smith",
      amount: 150,
      date: "2023-07-02",
    },
    {
      id: 3,
      orderId: "003",
      customer: "Sam Brown",
      amount: 200,
      date: "2023-07-03",
    },
    {
      id: 4,
      orderId: "004",
      customer: "Lisa White",
      amount: 250,
      date: "2023-07-04",
    },
    {
      id: 5,
      orderId: "005",
      customer: "Paul Green",
      amount: 300,
      date: "2023-07-05",
    },
  ];

  const columns = [
    { field: "orderId", headerName: "Order ID", width: 100 },
    { field: "customer", headerName: "Customer", width: 150 },
    { field: "amount", headerName: "Amount ($)", width: 100 },
    { field: "date", headerName: "Date", width: 150 },
  ];

  // Calculate total revenue
  const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

  return (
    <div className="flex justify-between h-screen p-2 bg-gray-200">
      <div className="flex flex-col w-2/3">
        <div className="flex">
          <div className="bg-white h-52 m-5 w-60 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-blue-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">699</h2>
            </div>
            <h2 className="font-semibold text-xl">Products</h2>
          </div>

          <div className="bg-white h-52 m-5 w-60 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-red-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">100</h2>
            </div>
            <h2 className="font-semibold text-xl">Orders</h2>
          </div>

          <div className="bg-white h-52 m-5 w-60 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-slate-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">200</h2>
            </div>
            <h2 className="font-semibold text-xl">Users</h2>
          </div>
        </div>

        <div className="bg-white m-5 p-5 shadow-xl rounded-lg">
          <h2 className="font-semibold text-xl mb-5">Recent Orders</h2>
          <div style={{ height: 300, width: "100%" }}>
            <DataGrid
              rows={orders}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/3 bg-white p-5 shadow-xl rounded-lg">
        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="font-bold text-2xl">Total Revenue: ${totalRevenue}</h2>
        </div>
        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="font-bold text-2xl">Total Losses: $0</h2>
        </div>

        <div className="bg-gray-50 h-[400px] w-[350px] p-5 shadow-xl rounded-lg flex items-center justify-center">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={350}
        
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
