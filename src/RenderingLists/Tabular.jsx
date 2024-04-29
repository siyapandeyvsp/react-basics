export const Tabular = ({ data }) => {
    const heads=Object.keys(data[0]);
    return (
      <table className=" m-5 text-left text-sm font-light text-surface text-black">
        <thead className="text-2xl text-blue-900">
          <tr>
            {heads.map((head) => (
              <th key={head}
              scope="col" className="px-6 py-4 border-4  rounded-lg">
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr  key={item}
            className="border-4  border-black">
              {Object.values(item).map((val) => (
                <td
                  className="border-4 whitespace-nowrap px-6 py-4 font-medium"
                  key={val.key}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };