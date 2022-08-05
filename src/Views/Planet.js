import React, { useState, useEffect } from "react";
import axios from "axios";

const Planet = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [detailPlanet, setDetailPlanet] = useState([]);

  const url = `https://swapi.dev/api/planets/`;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(url);
    setPlanets(response.data.results);
    setLoading(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickModal = async (id) => {
    const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
    console.log(response.data);
    setDetailPlanet(response.data);
    setShowModal(true);
  };

  return loading ? (
    <div className="flex justify-center items-center">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <>
      <div>
        <div className="flex flex-row flex-wrap justify-center">
          {planets.map((planet, index) => {
            const { name, rotation_period, orbital_period, diameter } = planet;
            return (
              <div className="m-5 w-[120] h-[120]" key={index}>
                <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                      {name}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Rotation : {rotation_period}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Orbital : {orbital_period}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Diameter : {diameter}
                  </p>
                  <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white">
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:transition duration-150 ease-in-out group-hover:w-full"
                      type="button"
                      onClick={() => handleClickModal(index + 1)}
                    >
                      Detail View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Planet: {detailPlanet.name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-3 flex-auto">
                  <p className="m-1 text-slate-500 text-lg leading-relaxed">
                    Rotation : {detailPlanet.rotation_period}
                  </p>
                </div>
                <div className="relative p-3 flex-auto">
                  <p className="m-1 text-slate-500 text-lg leading-relaxed">
                    Orbital : {detailPlanet.orbital_period}
                  </p>
                </div>
                <div className="relative p-3 flex-auto">
                  <p className="m-1 text-slate-500 text-lg leading-relaxed">
                    Diameter : {detailPlanet.diameter}
                  </p>
                </div>
                <div className="relative p-3 flex-auto">
                  <p className="m-1 text-slate-500 text-lg leading-relaxed">
                    Population : {detailPlanet.population}
                  </p>
                </div>
                <div className="relative p-3 flex-auto">
                  <p className="m-1 text-slate-500 text-lg leading-relaxed">
                    Terrain : {detailPlanet.terrain}
                  </p>
                </div>
                <div className="relative p-3 flex-auto">
                  <p className="m-1 text-slate-500 text-lg leading-relaxed">
                    Climate : {detailPlanet.climate}
                  </p>
                </div>
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
              ;
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Planet;
