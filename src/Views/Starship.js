import React, { useState, useEffect } from "react";
import axios from "axios";

const Starship = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [detailStarship, setDetailStarships] = useState([]);

  const url = "https://swapi.dev/api/starships/";

  const getData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setStarships(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickModal = async (id) => {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`);
    console.log(response.data);
    setDetailStarships(response.data);
    setShowModal(true);
  };

  return loading ? (
    <div class="flex justify-center items-center">
      <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <>
      <div>
        <div className="flex flex-row flex-wrap justify-center">
          {starships.map((starship, index) => {
            const { name, model, passengers, crew } = starship;
            return (
              <div className="m-5 w-[120] h-[120]" key={index}>
                <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div>
                    {name.length <= 24 ? (
                      <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        Starship : {name}
                      </h5>
                    ) : (
                      <h5 className="mb-2 text-[50] font-bold tracking-tight text-gray-900 dark:text-white">
                        Starship : {name}
                      </h5>
                    )}
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Model : {model}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Passengers :{" "}
                    {passengers === "n/a" ? "Data not found" : passengers}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Crew : {crew}
                  </p>
                  <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white">
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleClickModal(index + 2)}
                    >
                      Detail View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Starships : {detailStarship.name}
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
                      <div className="relative p-4 flex-auto">
                        <p className="mx-1 text-slate-500 text-lg leading-relaxed">
                          Passengers :{" "}
                          {detailStarship.passengers === "n/a"
                            ? "Data not found"
                            : detailStarship.passengers}
                        </p>
                      </div>
                      <div className="relative p-4 flex-auto">
                        <p className="mx-1 text-slate-500 text-lg leading-relaxed">
                          Crew : {detailStarship.crew}
                        </p>
                      </div>
                      <div className="relative p-4 flex-auto">
                        <p className="mx-1 text-slate-500 text-lg leading-relaxed">
                          Length : {detailStarship.length}
                        </p>
                      </div>
                      <div className="relative p-4 flex-auto">
                        <p className="mx-1 text-slate-500 text-lg leading-relaxed">
                          Cargo Capacity : {detailStarship.cargo_capacity}
                        </p>
                      </div>
                      <div className="relative p-4 flex-auto">
                        <p className="mx-1 text-slate-500 text-lg leading-relaxed">
                          Manufacturer : {detailStarship.manufacturer}
                        </p>
                      </div>
                      <div className="relative p-4 flex-auto">
                        <p className="mx-1 text-slate-500 text-lg leading-relaxed">
                          Counsumables : {detailStarship.consumables}
                        </p>
                      </div>
                      <div className="relative p-4 flex-auto">
                        <p className="mx-1 text-slate-500 text-lg leading-relaxed">
                          Model : {detailStarship.model}
                        </p>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
        </div>
      </div>
    </>
  );
};

export default Starship;
