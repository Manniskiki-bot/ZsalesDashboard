import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { schoolData } from './schoolData'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { useSortableTable } from "./useSortableTable";

const School = () => {
  const [tableData, handleSorting] = useSortableTable(schoolData)
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const columns = [
    { label: "School", accessor: "name", sortable: true},
    { label: "Type", accessor: "type", sortable: true},
    { label: "County", accessor: "county", sortable: true},
    { label: "DOR", accessor: "registrationDate", sortable: false},
    { label: "Email", accessor: "email", sortable: false},
    { label: "Phone", accessor: "contact", sortable: false},
    { label: '', accessor: 'details', sortable: false }
  ]
  
   const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
  };
  return (
    <section className='ml-[250px] mt-10'>
       <div>
          <h2 className='font-medium'>All Schools</h2>
          <div className='flex gap-7'>
            <Link to="/" className='hover:text-txred'>Home</Link>
            <ul className='list-disc custom-list-disc'>
                <li className='text-linkgrey  '>All Schools</li>
            </ul>
          </div>
       </div>

       <div className='bg-bgwhite mt-5 pt-8 pl-9 pr-5 mr-4 pb-10 shadow-glow rounded-md'>
         <h3 className='font-medium'>All Schools Data</h3>
         <div className='flex items-center mb-10 mt-3'>
          <span className='text-sm text-linkgrey'>Show</span>
          <select
            className='ml-2 border border-linkgrey rounded-md px-4 py-1 text-xs'
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className='ml-2 text-sm text-linkgrey'>entries</span>
        </div>
         <table className='border border-collapse border-blue text-[15px]'>
        <TableHead columns={columns} handleSorting={handleSorting}/>
        <TableBody columns={columns} tableData={tableData.slice(0, itemsPerPage)} />
       </table>
       </div>
       
       
    </section>
  )
}

export default School