// import React from 'react';
// import { companyData2 } from '../data';
// const CompanyDetail2 = () => {
//   return (
//     <div className='m-5 p-5 flex flex-col items-center justify-center'>
//       {companyData2.map((company, index) => (
//         <div key={index}>
//           {Object.entries(company).map(([companyKey, employees], empIndex) => (
//             <div key={empIndex}>
//               <h2 className='text-lg font-bold text-blue-500'>Company : {companyKey}.pvt.ltd</h2>
//               <table border='1' className='m-2 border-4'>
//                 <thead>
//                   <tr >
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Profile</th>
//                   </tr>
//                 </thead>
//                 <tbody>
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

import React from "react";
import { companyData2 } from "../data";

const CompanyDetail2 = () => { 
  const companies = Object.entries(companyData2[0]);
  return (
    <div>
      <h1 className="font-bold text-2xl text-center text-blue-900"> Company Details </h1>
      {companies.map((company) => (
        <div key={company}>
          <h1 className="text-blue-500  text-xl font-bold">Company : {company[0]}.pvt.ltd </h1>
          <table>
            <thead>
              <tr>{Object.keys(...company[1]).map(head=><th key={head}className="border-4 p-5">{head}</th>)}</tr>
            </thead>
            <tbody>
            {company[1].map((employee,i)=><tr key={i}>{Object.values(employee).map((data,i)=>(<td className="border-4 p-5" key={i}>{data}</td>))}</tr>)}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CompanyDetail2;
