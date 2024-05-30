import React from 'react'
import { Link } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";


const TableBody = ({ tableData, columns}) => {
  return (
    <tbody>
        {tableData.map((data) =>{
            const rowColor = data.id % 2 !== 0? 'bg-tablegrey' : 'bg-bgwhite'
            return(
                <tr key={data.id} className={rowColor}>
                    {columns.map(({accessor}) =>{
                        const tData = data[accessor] ? data[accessor] : "——";
                        return accessor === 'details' ?(
                        <td key={accessor} className=' px-3 py-4 text-center border border-tablegrey'>
                            
                            <Link to='/school/details'>
                                <span className='text-eye text-lg'><IoEyeOutline /></span>
                            </Link>
                        </td>
                        ):(
                            <td key={accessor} className='px-3 py-4 border border-tablegrey'>{tData}</td>
                        )
                    })}
                </tr>
            )
        })}
    </tbody>
  )
}

export default TableBody