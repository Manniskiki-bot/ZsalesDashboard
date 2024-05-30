import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddInvoice = ({ setInvoicesData, invoicesData }) => {
  const navigate = useNavigate();

  // Function to generate a random invoice number
  const generateInvoiceNumber = () => {
    const prefix = 'INV';
    const randomNumber = Math.floor(Math.random() * 10000) + 1;
    return `${prefix}${randomNumber}`;
  };

  const [formData, setFormData] = useState({
    number: generateInvoiceNumber(),
    item: '',
    dueDate: '',
    amount: '',
    status: 'Pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new invoice data to existing array
    const updatedInvoiceData = [...invoicesData, formData];

    // Update the table data in Invoices component
    setInvoicesData(updatedInvoiceData);

    // Redirect back to the invoices page after adding the invoice
    navigate('/school/details');
  };

  return (
    <div className="ml-[250px] mr-6 mt-10">
      <h2 className="font-medium">Add Invoice</h2>
      <div className="flex gap-7">
        <Link to="/" className="hover:text-txred">Home</Link>
        <ul className="list-disc custom-list-disc">
          <li className="text-linkgrey">Add Invoice</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="mt-5">
        <div className="flex flex-col mb-4">
          <label htmlFor="number" className="text-sm mb-1">Invoice Number:</label>
          <input type="text" id="number" name="number" value={formData.number} readOnly className="border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="item" className="text-sm mb-1">Item:</label>
          <select id="item" name="item" value={formData.item} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2">
            <option value="">Select Item</option>
            <option value="Zeraki Analytics">Zeraki Analytics</option>
            <option value="Zeraki Finance">Zeraki Finance</option>
            <option value="Zeraki Timetable">Zeraki Timetable</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="dueDate" className="text-sm mb-1">Due Date:</label>
          <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="amount" className="text-sm mb-1">Amount:</label>
          <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="status" className="text-sm mb-1">Status:</label>
          <select id="status" name="status" value={formData.status} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2">
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Overdue">Overdue</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
};

export default AddInvoice;
