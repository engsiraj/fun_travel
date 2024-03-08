import { useContext } from "react";
import { DataContext } from "./Api";
import { deleteItem } from "../assets";
const PlacesList = ({ openUp }) => {
  const { setIsUpdated, place } = useContext(DataContext);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      deleteItem(id).then(() => setIsUpdated(true));
    }
  };

  return (
    <>
      <table className="my-10 w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              place Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              place name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              city
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {place.map((data) => (
            <tr key={data.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-md"
                    src={data.imageurl}
                    alt="name here"
                  />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{data.placename}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {data.city}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a
                  onClick={() => openUp(data)}
                  className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                >
                  Edit
                </a>
                <a
                  onClick={() => handleDelete(data.id)}
                  className="ml-2 text-red-600 hover:text-red-900 cursor-pointer"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PlacesList;
