// import React from 'react';
// import { companyData2 } from '../data';

// const CompanyDetail2 = () => {
//   return (
//     <div className='m-5 p-5 flex flex-col items-center justify-center'>
//       {/* Map through each company */}
//       {companyData2.map((company, index) => (
//         <div key={index}>
//           {/* Display company name */}

//           {/* Map through employees of the current company */}
//           {Object.entries(company).map(([companyKey, employees], empIndex) => (
//             <div key={empIndex}>
//               {/* Display company key */}
//               <h2 className='text-lg font-bold text-blue-500'>Company : {companyKey}.pvt.ltd</h2>

//               {/* Render employee table */}
//               <table border='1' className='m-2 border-4'>
//                 <thead>
//                   <tr >
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Profile</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* Map through employees */}
//                   {employees.map((employee, empId) => (
//                     <tr  key={empId}>
//                       <td className='border-4'>{employee.id}</td>
//                       <td className='border-4' >{employee.name}</td>
//                       <td className='border-4' >{employee.profile}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ))}       
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CompanyDetail2;
import React from 'react'
import { companyData2 } from '../data'
const CompanyDetail2 = () => {
    console.log("company data ",companyData2)
    const data=Object.entries(companyData2[0])
    console.log("inside ",data)
   Object.values(data)
  return (
    <div>
      hi
      {/* {data.map(cid=><div>Company Name : {Object.values(data).map(cname=><p>{cname}</p>)}</div>)} */}
    </div>
  )
}

export default CompanyDetail2
