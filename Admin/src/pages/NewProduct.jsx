

const NewProduct = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-semibold">New Product</h1>
       
      </div>
      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
        <form className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 space-y-5">
            <div>
              <label className="block mb-2 font-semibold">Product Name</label>
              <input
                type="text"
                name="title"
                
                placeholder="Product Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Product Description</label>
              <input
                type="text"
                name="desc"
               
                placeholder="Product Description"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Product Original Price</label>
              <input
                type="number"
                name="originalPrice"
               
                placeholder="Original Price"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Product Discounted Price</label>
              <input
                type="number"
                name="discountedPrice"
                
                placeholder="Discounted Price"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">In Stock</label>
              <select
                name="inStock"
               
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center space-y-5">
            <div className="flex flex-col items-center">
              <img
               
                alt="Product"
                className="h-40 w-40 object-cover mb-5 rounded-full"
              />
              <label htmlFor="file" className="cursor-pointer">
              
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
             
              />
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded"
             
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewProduct