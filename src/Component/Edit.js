import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditList = () => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const history = useNavigate();
  const { id } = useParams();

  const handleChangeName = (e) => setName(e.target.value);

  const handleChangeHeight = (e) => setHeight(e.target.value);

  const updatePeople = async (e) => {
    e.preventDefault();
    await axios.patch(`https://swapi.dev/api/people/${id}`, {
      name: name,
      height: height,
    });
    history("/listTable");
  };

  useEffect(() => {
    const getPeopleById = async () => {
      const response = await axios.get(`https://swapi.dev/api/people/${id}`);
      setName(response.data.name);
      setHeight(response.data.height);
    };
    getPeopleById();
  }, [id]);

  return (
    <div className="mt-60">
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="mb-6">
          <h1 className="text-gray-700 text-5xl mb-5">Add People</h1>
        </div>
        <form
          className="w-full max-w-lg flex flex-col justify-center items-center"
          onSubmit={updatePeople}
        >
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div className="w-full mt-6  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Heigh"
                value={height}
                onChange={handleChangeHeight}
              />
              Height
            </label>
          </div>
          <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditList;
