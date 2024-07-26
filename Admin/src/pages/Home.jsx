import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
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
    <div className="flex justify-between h-[100vh]">
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <div className="bg-gray-50 h-[100] m-[30px] w-[350px] shadow-xl">
            <div className="h-[200px] w-[200px]">
              <Gauge
                value={75}
                startAngle={0}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
              />
            </div>
            <h2 className="font-semibold text-[18px] m-[40px]">Products</h2>
          </div>

          <div className="bg-gray-50 h-[300px] m-[30px] w-[350px] shadow-xl">
            <div className="h-[200px] w-[200px] m-[30px] border-[20px] border-red-400 border-solid rounded-full">
              <div className="flex items-center justify-center m-[30px]">
                <h2 className="font-bold text-[25px] m-[40px]">100</h2>
              </div>
              <h2 className="font-semibold text-[18px] m-[40px]">Orders</h2>
            </div>
          </div>
        </div>
        <div className="flex items-center"></div>
        <div className="m-3">
          <h2 className="font-semibold text-[18px] m-[30px]">Recent Orders</h2>
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

      <div className="flex flex-col bg-gray-100 m-[5px] h-[800px] w-[300px] shadow-xl">
        <div className="bg-gray-50 h-[100px] m-[5px] w-[300px] shadow-xl flex items-center justify-center">
          <h2 className="font-bold text-[25px]">
            Total Revenue: ${totalRevenue}
          </h2>
        </div>
        <div className="bg-gray-50 h-[100px] m-[5px] w-[300px] shadow-xl flex items-center justify-center">
          <h2 className="font-bold text-[25px]">Total Losses: ${0}</h2>
        </div>
        <div className="m-[40px]">
          <h3 className="font-bold">Recent Users</h3>
          <ul>
            <li>1. James Lisley</li>
            <li>2. Joel Lisper</li>
            <li>3. Jane Doe</li>
            <li>4. Liz Doe</li>
          </ul>
        </div>

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Toners" },
                { id: 1, value: 15, label: "Serums" },
                { id: 3, value: 20, label: "Relaxers" },
                { id: 4, value: 30, label: "Creams" },
              ],
              innerRadius: 50,
              outerRadius: 70,
              paddingAngle: 7,
              cornerRadius: 5,
              startAngle: -90,
              endAngle: 180,
              cx: 150,
              cy: 100,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
