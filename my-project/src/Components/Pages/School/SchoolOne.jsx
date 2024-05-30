import React from 'react'
import { Link } from 'react-router-dom'
import InvoiceSchOne from './InvoiceSchOne'

const SchoolOne = () => {
  return (
    <section className='ml-[250px] mt-10 mr-3'>
        <div>
        <h2 className='font-medium'>School Details</h2>
          <div className='flex gap-7'>
            <Link to="/" className='hover:text-txred'>Home</Link>
            <ul className='list-disc custom-list-disc'>
                <li className='text-linkgrey  '>School Details</li>
            </ul>
          </div>
          <div className='flex gap-8'>
            <div className='bg-bgwhite pt-6 pb-6 pl-8 mt-6 pr-[100px] flex flex-col gap-3 rounded-md shadow-glow'>
                <h2 className='text-center text-base font-medium ml-20'>Keveye Girls</h2>
                <span className='text-sm bg-category text-eye text-center rounded-xl w-[80px] ml-24'>Secondary</span>
                <div>
                    <h4 className='text-sm font-medium mb-2 mt-16'>Details</h4>
                    <hr className='border border-tablegrey w-[300px] absolute'/>
                    <ul className='flex flex-col gap-3 text-sm font-medium mt-6'>
                        <li className='flex gap-2 items-center  text-sm'>Name: <span className='text-sm font-normal'>Keveye Girls</span></li>
                        <li className='flex gap-2 items-center '>Type: <span className='text-sm font-normal'>Secondary</span> </li>
                        <li className='flex gap-2 items-center '>County: <span className='text-sm font-normal'>Vihiga</span></li>
                        <li className='flex gap-2 items-center '>DOR: <span className='text-sm font-normal'>2010-05-14</span></li>
                        <li className='flex gap-2 items-center '>Email: <span className='text-sm font-normal'>contact@keveyegirls.ac.ke</span></li>
                        <li className='flex gap-2 items-center '>Phone: <span className='text-sm font-normal'>+254700123456</span></li>
                    </ul>
                </div>
            </div>
            <div>
                <button>Invoices</button>
                <InvoiceSchOne />
            </div>
          </div>
        </div>
    </section>
  )
}

export default SchoolOne