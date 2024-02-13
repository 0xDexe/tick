import React from 'react';

const helper = (item) => {
  return (
    <>
      <td className="text-center border-collapse border border-slate-900 px-4 py-2">{item.name}</td>
      <td className="text-center border-collapse border border-slate-900 px-4 py-2">{item.v}</td>
      <td className="text-center border-collapse border border-slate-900 px-4 py-2">{item.s}</td>
      <td className="text-center border-collapse border border-slate-900 px-4 py-2">{item.g}</td>
      <td className="text-center border-collapse border border-slate-900 px-4 py-2">{item.p}</td>
      <td className="text-center border-collapse border border-slate-900 px-4 py-2">{item.d}</td>
    </>
  );
};

const NestedTable = ({ data }) => {
  const columns = ["Service", "Virtual Manager", "Silver", "Gold", "Platinum", "Diamond"];
  const iterator = ["name", "v", "s", "g", "p", "d"];
  
  return (
    <div className="nested-table">
      <h2 className="text-2xl text-center font-bold mb-4">Services</h2>
      <table className=" w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="text-center px-4 py-2">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6">
              <h2 className="font-bold text-1xl text-start laptop:ml-11 px-4 py-2 mb-4">Society Management</h2>
            </td>
          </tr>
          {data.serviceList && data.serviceList.map((item, index) => (
            <tr key={index}>
              {helper(item)} 
            </tr>
          ))}
          <tr>
            <td colSpan="6">
              <h2 className="font-bold text-1xl text-start laptop:ml-11 px-4 py-2 mb-4">Escalation Matrix</h2>
            </td>
          </tr>
          {data.EscalationMatrix && (
            <tr>
              {iterator.map((iter, index) => (
                <td key={index} className="border-collapse border border-slate-900 text-center px-4 py-2">
                  {data.EscalationMatrix[iter] || ''}
                </td>
              ))}
            </tr>
          )}
          <tr>
            <td colSpan="6">
              <h2 className="font-bold text-1xl text-start laptop:ml-11 px-4 py-2 mb-4">Supervision</h2>
            </td>
          </tr>
          {data.Supervisor && (
            <tr>
              {iterator.map((iter, index) => (
                <td key={index} className=" border-collapse border border-slate-900 text-center px-4 py-2">
                  {data.Supervisor[iter] || ''}
                </td>
              ))}
            </tr>
          )}
          <tr>
            <td colSpan="6">
              <h2 className="font-bold text-1xl text-start laptop:ml-11 px-4 py-2 mb-4">Financial Management</h2>
            </td>
          </tr>
          {data.Financial && data.Financial.map((item, index) => (
            <tr key={index}>
              {helper(item)} 
            </tr>
          ))}
          <tr>
            <td colSpan="6">
              <h2 className="font-bold text-1xl text-start laptop:ml-11 px-4 py-2 mb-4">Statutory Requirements</h2>
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
  );
};

export default NestedTable;
