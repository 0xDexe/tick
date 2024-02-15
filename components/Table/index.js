import React from 'react';

const helper = (item) => {
  return (
    <>
      <td className="text-start border border-collapse 	 border-slate-700 px-4 py-2">{item.name}</td>
      <td className="text-start border border-collapse border-slate-700 px-4 py-2">{item.v}</td>
      <td className="text-start border border-collapse border-slate-700 px-4 py-2">{item.s}</td>
      <td className="text-start border border-collapse border-slate-700 px-4 py-2">{item.g}</td>
      <td className="text-start border border-collapse border-slate-700 px-4 py-2">{item.p}</td>
      <td className="text-start border border-collapse border-slate-700 px-4 py-2">{item.d}</td>
    </>
  );
};

const NestedTable = ({ data }) => {
  const columns = ["Service", "Virtual Manager", "Silver", "Gold", "Platinum", "Diamond"];
  const iterator = ["name", "v", "s", "g", "p", "d"];
  
  return (
    <div className="nested-table">
      <h2 className="text-2xl text-start font-bold mb-4">Services</h2>
      <div className="overflow-x-auto">
        <table className="border-collapse w-full md:w-max-4xl">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} className="text-start px-4 py-2">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6">
                <h2 className="font-bold text-1xl text-start laptop:ml-14 px-4 laptop:mt-4 mb-4">Society Management</h2>
              </td>
            </tr>
            {data.serviceList && data.serviceList.map((item, index) => (
              <tr key={index}>
                {helper(item)}
              </tr>
            ))}
            <tr>
              <td colSpan="6">
                <h2 className="font-bold text-1xl text-start laptop:ml-14 px-4 laptop:mt-4  mb-4">Escalation Matrix</h2>
              </td>
            </tr>
            {data.EscalationMatrix && (
              <tr>
                {iterator.map((iter) => (
                  <td key={iter} className="text-start border border-collapse border-slate-700 px-4 py-2">
                    {data.EscalationMatrix[iter] || ''}
                  </td>
                ))}
              </tr>
            )}
            <tr>
              <td colSpan="6">
                <h2 className="font-bold text-1xl text-start laptop:ml-14  px-4 laptop:mt-4 mb-4">Supervision</h2>
              </td>
            </tr>
            {data.Supervisor && (
              <tr>
                {iterator.map((iter) => (
                  <td key={iter} className="text-start border border-collapse border-slate-700 px-4 py-2">
                    {data.Supervisor[iter] || ''}
                  </td>
                ))}
              </tr>
            )}
            <tr>
              <td colSpan="6">
                <h2 className="font-bold text-1xl text-start laptop:ml-14  laptop:mt-4 px-4  mb-4">Financial Management</h2>
              </td>
            </tr>
            {data.Financial && data.Financial.map((item, index) => (
              <tr key={index}>
                {helper(item)}
              </tr>
            ))}
            <tr>
              <td colSpan="6">
                <h2 className="font-bold text-1xl text-start laptop:ml-14  laptop:mt-4 px-4  mb-4">Statutory Requirements</h2>
              </td>
            </tr>
            {data['Statutory'] && data['Statutory'].map((item, index) => (
              <tr key={index}>
                {helper(item)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NestedTable;
