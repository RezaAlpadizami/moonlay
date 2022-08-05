import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListTable = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    getPeoples();
  }, []);

  const getPeoples = async () => {
    const response = await axios.get(`https://swapi.dev/api/people/`);
    console.log(response);
    setPeoples(response.data.results);
  };

  const deletePeople = async (index) => {
    const dataPeople = [...peoples];
    dataPeople.splice(index, 1);
    setPeoples(dataPeople);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center pt-13 font-bold mb-8">
        <h3 className="text-4xl font-mouse mt-5">People in Wars</h3>
      </div>
      <div className=" flex justify-center mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="flex justify-between mb-3">
              <div className="flex mb-3">
                <Link
                  to="/add"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Create People
                </Link>
              </div>
              <div className="flex">
                <div className="flex border-2 border-gray-200 rounded-lg">
                  <input
                    type="text"
                    className="px-4 py-2 w-80"
                    placeholder="Search..."
                  />
                  <button className="px-4 text-white bg-gray-600 border-l rounded-lg">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">No</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Height</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Skin_color
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Hair_color
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Birth_Year
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
                  </tr>
                </thead>
                {peoples.map((people, index) => (
                  <tbody
                    className="bg-white divide-y divide-gray-300"
                    key={index}
                  >
                    <tr className="whitespace-nowrap">
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {people.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-sm text-gray-500">
                          {people.height}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-sm text-gray-500">
                          {people.skin_color}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-sm text-gray-500">
                          {people.hair_color === "n/a"
                            ? "unknown"
                            : people.hair_color}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-sm text-gray-500">
                          {people.birth_year}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Link to={`/edit/${index}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokel="true"
                              inecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => deletePeople(index)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTable;
