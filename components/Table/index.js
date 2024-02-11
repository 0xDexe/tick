import React from 'react';

const helper = (item)=> 
  {
    return(
      <>
      <td className="text-start  px-4 py-2">{item.name}</td>
                <td className=" text-start   px-4 py-2">{item.v}</td>
                <td className=" text-start px-4 py-2">{item.s}</td>
                <td className="text-start px-4 py-2">{item.g}</td>
                <td className="text-start px-4 py-2">{item.p}</td>
                <td className="text-start px-4 py-2">{item.d}</td>
      </>
    )
  }
const NestedTable = ({ data }) => {
  const columns = ["Service", "Virtual Manager", "Silver", "Gold", "Platinum", "Diamond"];
  const iterator = ["name", "v", "s", "g", "p", "d"]
  
  return (
    <div className="nested-table">
      <h2 className="text-2xl text-center font-bold mb-4">Services</h2>
      <table className="border-collapse w-full">
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
          <h2 className="font-bold text-1xl text-start px-4 py-2 mb-4 ">Society Management</h2>
          {data.serviceList && data.serviceList.map((item, index) => (
            <tr key={index}>
              {helper(item)} 
              
            </tr>
          ))}
          
          <h2 className="font-bold  text-1xl text-start px-4 py-2 mb-4 ">Escalation Matrix</h2>

          {data.EscalationMatrix && (
            <tr>
              {iterator.map((iter) => (
                <td key={iter} className="text-start px-4 py-2">
                  {data.EscalationMatrix[iter] || ''}
                </td>
              ))}
            </tr>
          )}
          <h2 className="font-bold text-1xl text-start px-4 py-2 mb-4 ">Supervision</h2>

          {data.Supervisor && (
            <tr>
              {iterator.map((iter) => (
                <td key={iter} className="text-start px-4 py-2">
                  {data.Supervisor[iter] || ''}
                </td>
              ))}
            </tr>
          )}
                    <h2 className="font-bold text-1xl text-start px-4 py-2 mb-4 ">Financial Management</h2>

          {data.Financial && data.Financial.map((item, index) => (
            <tr key={index}>
               
              {helper(item)} 
              
            </tr>
          ))}
          <h2 className="font-bold text-1xl text-start px-4 py-2 mb-4 ">Statutory Requirements</h2>

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
