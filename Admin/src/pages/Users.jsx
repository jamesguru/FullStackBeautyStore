import { DataGrid } from '@mui/x-data-grid';
import { FaTrash } from 'react-icons/fa';

const Users = () => {

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "role", headerName: "Role", width: 130 },
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
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "234-567-8901",
      role: "User",
    },
    {
      id: 3,
      name: "Tom Johnson",
      email: "tomjohnson@example.com",
      phone: "345-678-9012",
      role: "Moderator",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emilydavis@example.com",
      phone: "456-789-0123",
      role: "User",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      phone: "567-890-1234",
      role: "Admin",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      email: "sarahwilson@example.com",
      phone: "678-901-2345",
      role: "User",
    },
    {
      id: 7,
      name: "David Lee",
      email: "davidlee@example.com",
      phone: "789-012-3456",
      role: "Moderator",
    },
    {
      id: 8,
      name: "Laura White",
      email: "laurawhite@example.com",
      phone: "890-123-4567",
      role: "User",
    },
    {
      id: 9,
      name: "Chris Harris",
      email: "chrisharris@example.com",
      phone: "901-234-5678",
      role: "Admin",
    },
    {
      id: 10,
      name: "Patricia Clark",
      email: "patriciaclark@example.com",
      phone: "012-345-6789",
      role: "User",
    },
  ];

  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[5px]">
        <h1 className="m-[20px] text-[20px]">All Users</h1>
      </div>

      <div className="m-[30px]">
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </div>
    </div>
  );
};

export default Users;
