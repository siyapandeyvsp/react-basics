import React from "react";

const EmployeeTable = ({ employees }) => {
//   console.log("employees", employees);
  const headers = Object.keys(employees[0]);
//   console.log("headers", headers);
  const rows = employees.map((emp) => Object.values(emp));
//   console.log("rows", rows);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th className="border-4 p-4" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {row.map((cell) => (
                <td className='border-4 p-5'>{cell} </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
