import React, { useState } from 'react'
import { IoSchoolOutline } from "react-icons/io5";

const Invoice = ({rows}) => {
    const [sortedRows, setRows] = useState(rows)

  return (
    <section className='mt-16 ml-[250px]'>
        <h2 className='text-center text-2xl'>Invoices</h2>
    <div className='shadow-glow rounded-md mt-7 ml-6 mr-20 pt-5 pb-5 pl-8 mb-10 w-[860px]'>
    <table className='w-[800px]'>
  <thead>
    <tr className='space-x-2'>
      {Object.keys(rows[0])
        .filter(entry => entry !== 'Id') // Exclude the "id" field
        .map((entry, index) => (
          <th key={index} className='text-grey font-medium'>{entry}</th>
        ))}
    </tr>
  </thead>
  <tbody>
    {sortedRows.map((row, index) => (
      <tr key={index} className='space-y-10'>
        {Object.entries(row)
          .filter(([key]) => key !== 'Id') // Exclude the "id" field
          .map(([key, entry], columnIndex) => (
            <td 
              key={columnIndex} 
              className='text-sm font-medium px-6 py-3 border-b border-solid border-white text-center'>
              {key === 'status' ? (
                <span className={`px-1 py-0.5 rounded ${entry === 'Overdue' ? 'bg-bgred text-txred' : entry === 'Pending' ? 'bg-bggrey text-black' : ''}`}>
                  {entry}
                </span>
              ) : (
                entry
              )}
            </td>
          ))}
      </tr>
    ))}
  </tbody>
</table>


    </div>
    </section>
  )
}

export default Invoice