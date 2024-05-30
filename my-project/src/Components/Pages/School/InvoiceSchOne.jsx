import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import invoicesData from './invoiceSchdata';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useSortableTable } from './useSortableTable';

const Invoices = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState(invoicesData);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [checkedItems, setCheckedItems] = useState({});
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
  };

  const handleAddInvoice = () => {
    navigate('/add-invoice');
  };

  const handleCheckboxChange = (e, invoiceNumber) => {
    setCheckedItems({
      ...checkedItems,
      [invoiceNumber]: e.target.checked
    });
  };

  const handleDeleteChecked = () => {
    const updatedTableData = tableData.filter(row => !checkedItems[row.number]);
    setTableData(updatedTableData);
  };

  const handleSorting = (field) => {
    const sortOrder = field === sortField && order === "asc" ? "desc" : "asc";
    setSortField(field);
    setOrder(sortOrder);
    const sortedData = tableData.slice().sort((a, b) => {
      if (order === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setTableData(sortedData);
  };

  const columns = [
    { label: '', accessor: 'checkbox', sortable: false },
    { label: 'Invoice Number', accessor: 'number', sortable: true },
    { label: 'Item', accessor: 'item', sortable: true },
    { label: 'Creation Date', accessor: 'creationDate', sortable: true },
    { label: 'Due Date', accessor: 'dueDate', sortable: true },
    { label: 'Amount', accessor: 'amount', sortable: true },
    { label: 'Paid Amount', accessor: 'paidAmount', sortable: true },
    { label: 'Status', accessor: 'status', sortable: true },
    { label: 'Days Until Due', accessor: 'daysUntilDue', sortable: true },
    { label: '', accessor: 'details', sortable: false }
  ];

  const renderTableData = tableData.map((invoice) => ({
    ...invoice,
    checkbox: (
      <input
        type="checkbox"
        checked={checkedItems[invoice.number] || false}
        onChange={(e) => handleCheckboxChange(e, invoice.number)}
      />
    )
  }));

  return (
    <section className="ml-[0px] mt-10">
      <div className="bg-bgwhite mt-5 pt-8 pl-9 pr-5 mr-4 pb-10 shadow-glow rounded-md">
        <h3 className="font-medium flex justify-between items-center">
          All Invoices Data
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleAddInvoice}><FaPlus className='text-eye'/></button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDeleteChecked}><MdDelete className='text-txred'/></button>
          </div>
        </h3>
        <div className="flex items-center mb-10 mt-3">
          <span className="text-sm text-linkgrey">Show</span>
          <select
            className="ml-2 border border-linkgrey rounded-md px-4 py-1 text-xs"
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="ml-2 text-sm text-linkgrey">entries</span>
        </div>
        <table className="border border-collapse border-blue text-[10px]">
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody columns={columns} tableData={renderTableData.slice(0, itemsPerPage)} />
        </table>
      </div>
    </section>
  );
};

export default Invoices;
