import { useState, useEffect } from 'react';
import './App.css';
import { employeeData } from './EmployeeData'; // no use
import Create from './Create';

function App() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(employeeData);
  }, []);

  const handleEdit = (id) => {
    setIsUpdate(true);
    const dt = data.find((item) => item.id === id);
    setEditData(dt);
  };

  const handleDelete = (id) => {

      if (window.confirm("Are you sure to delete this item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
  };

  const handleFormSubmit = (formData) => {
    if (isUpdate) {
      const updatedData = data.map((item) =>
        item.id === formData.id ? formData : item
      );
      setData(updatedData);
      setIsUpdate(false);
      setEditData(null);
    } else {
      setData([...data, formData]);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-yellow-50 py-5">
        <h1 className='text-2xl font-bold text-center mb-3'>CRUD Application</h1>
        <Create data={editData} update={isUpdate} onSubmit={handleFormSubmit} />
        <h1 className="text-red-500 text-center font-bold my-5 underline">Employee details</h1>
        {
          data.length ===0 ? <h1>No employee exist</h1>
          :
          <div className="flex h-full w-full">
          <table className=" p-2 border w-[80%] mx-auto rouned-xl ">
            <thead className="border">
              <tr className="m-2 p-5 bg-red-50">
                <td>Sr. No</td>
                <td>id</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Age</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>
                      <button className="bg-blue-600 rounded-md m-1 p-1 cursor-pointer w-[60px]" onClick={() => handleEdit(item.id)}>Edit</button>
                      <button className="bg-red-500 rounded-md m-1 p-1 cursor-pointer" onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        }
        
      </div>
    </>
  );
}

export default App;



