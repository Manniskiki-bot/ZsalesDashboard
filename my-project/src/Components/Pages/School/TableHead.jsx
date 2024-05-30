import React, { useState} from 'react'




const TableHead = ({columns, handleSorting}) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    }

  return (
    <thead >
        <tr className='text-center'>
            {columns.map(({ label, accessor, sortable}) =>{
                const cl = sortable
                ? sortField === accessor && order === "asc"
                 ? "up"
                 : sortField === accessor && order === "desc"
                 ? "down"
                 : "default"
                : "";
                return <th key={accessor} className={`py-2.5 border border-tablegrey cursor-pointer ${cl}`} onClick = { sortable ? () => handleSortingChange(accessor) : null}>
                    {label}
                    {cl === 'up' && (
                <img
                  src="/Images/up_arrow.png"
                  alt="Up Arrow"
                  className="inline-block ml-2"
                />
              )}
                {cl === "down" && (
                <img
                  src="/Images/down_arrow.png"
                  alt="Down Arrow"
                  className="inline-block ml-2"
                />
              )}
              {cl === 'default' && (
                <img
                  src="/Images/default.png"
                  alt="Default"
                  className="inline-block ml-2"
                />
              )}
                </th>
            })}
        </tr>
    </thead>
  )
}

export default TableHead