export default () => {
  const tableItems = [
    {
      name: "Jane Cooper",
      company: "Microsoft",
      phonenumber: "080253434",
      email: "jane@microsoft.com",
      country: "United Kingdom",
      status: "Active",
    },
    {
      name: "Window wrapper",
      company: "Yahoo",
      phonenumber: "080253434",
      email: "jane@microsoft.com",
      country: "Brazil",
      status: "Active",
    },
    {
      name: "Unity loroin",
      company: "Adobe",
      phonenumber: "080253434",
      email: "jane@microsoft.com",
      country: "USA",
      status: "Inactive",
    },
    {
      name: "Background remover",
      company: "Tesla",
      phonenumber: "080253434",
      email: "jane@microsoft.com",
      country: "Israel",
      status: "Active",
    },
    {
      name: "Colon tiger",
      company: "Google",
      phonenumber: "080253434",
      email: "jane@microsoft.com",
      country: "Iran",
      status: "Active",
    },
  ];

  return (
    <div className="">
      <div className="items-start justify-between md:flex"></div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-[#b5b7c0] font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Users Name</th>
              <th className="py-3 pr-6">Company</th>
              <th className="py-3 pr-6">Phone Number</th>
              <th className="py-3 pr-6">Email</th>
              <th className="py-3 pr-6">Country</th>
              <th className="py-3 text-right pr-16">Status</th>
            </tr>
          </thead>
          <tbody className="text-[#292d32] font-medium divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.company}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  {item.phonenumber}
                </td>

                <td className="pr-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.country}</td>
                <td className="text-center whitespace-nowrap">
                  <span
                    className={`px-8  py-2 rounded-md font-semibold text-xs ${
                      item.status == "Active"
                        ? "text-[#008767] font-bold bg-[#16c098]/50 border border-[#008767]"
                        : "text-[#df0404] bg-[#ffc5c5] border border-[#df0404]"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
