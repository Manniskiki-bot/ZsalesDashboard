import React from 'react'

const Table = () => {
  return (
    <table className='border border-collapse border-blue text-[15px]'>
    <TableHead columns={columns} />
    <TableBody   />
   </table>
  )
}

export default Table