import React from "react";
import { companyData as data } from "../data";
import EmployeeTable from "./EmployeeTable";
const CompanyDetail = () => {
  console.log("company data", data);
  console.log("Object entires for company data",Object.entries(data))
  return (
    <div>
      <h1 className="font-bold text-3xl text-blue-700 text-center">        
        Companies
      </h1>
      {data.map((company) => (
        <div className="flex flex-col items-center" key={company.companyId}>
          <h1 className="text-xl font-bold text-center text-blue-500">
            {company.companyName}
          </h1>
          <EmployeeTable employees={company.employees} />
        </div>
      ))}
    </div>
  );
};

export default CompanyDetail;
