import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPeople = () => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const history = useNavigate();

  const handleChangeName = (e) => setName(e.target.value);

  const handleChangeHeight = (e) => setHeight(e.target.value);
  const handleChangeSkin = (e) => setSkinColor(e.target.value);
  const handleChangeHair = (e) => setHairColor(e.target.value);
  const handleChangeBirth = (e) => setBirthYear(e.target.value);

  const savePeople = async (e) => {
    e.preventDefault();
    await axios.post(`https://swapi.dev/api/people`, {
      name: name,
      height: height,
      skinColor: skinColor,
      hairColor: hairColor,
      birthYear: birthYear,
    });
    history("listTable");
  };

  return (
    <div className="mt-5">
      <div className="w-screen flex flex-col items-center justify-center">
        <div className="mb-6">
          <h1 className="text-gray-700 text-5xl mb-5 font-mouse">Add People</h1>
        </div>
        <form
          className="w-full max-w-lg flex flex-col justify-center items-center"
          onSubmit={savePeople}
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
              required
            />
          </div>
          <div className="w-full mt-6  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Height
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Height"
              value={height}
              onChange={handleChangeHeight}
              required
            />
          </div>
          <div className="w-full mt-6  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Skin Color
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Skin"
              value={skinColor}
              onChange={handleChangeSkin}
              required
            />
          </div>
          <div className="w-full mt-6  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Hair Color
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Hair Color"
              value={hairColor}
              onChange={handleChangeHair}
              required
            />
          </div>
          <div className="w-full mt-6  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Birth Year
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Birth Year"
              value={birthYear}
              onChange={handleChangeBirth}
              required
            />
          </div>
          <button
            type="submit"
            className="w-40 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-6"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPeople;
