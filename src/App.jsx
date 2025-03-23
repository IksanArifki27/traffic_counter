import React, { useEffect, useState } from "react";

function App() {
  const [motor, setMotor] = useState(0);
  const [mobilBensi, setMobillBensi] = useState(0);
  const [mobilSolar, setMobilSolar] = useState(0);
  const [angkot, setAngkot] = useState(0);
  // const [pickUpB, setPickUpB] = useState(0);
  const [pickUpS, setPickUpS] = useState(0);
  const [busK, setBusK] = useState(0);
  const [busB, setBusB] = useState(0);
  const [truck2, seTtruck2] = useState(0);
  const [truck3, seTtruck3] = useState(0);
  const [display, setDisplay] = useState(false);

  const btnReset = (e) => {
    e.preventDefault();
    setMotor(0);
    setMobillBensi(0);
    setMobilSolar(0);
    setAngkot(0);
    // setPickUpB(0);
    setPickUpS(0);
    setBusK(0);
    setBusB(0);
    seTtruck2(0);
    seTtruck3(0);
    localStorage.removeItem("motor");
    localStorage.removeItem("mobilB");
    localStorage.removeItem("mobilS");
    localStorage.removeItem("angkot");

    localStorage.removeItem("pickupS");
    localStorage.removeItem("busK");
    localStorage.removeItem("busB");
    localStorage.removeItem("truck2");
    localStorage.removeItem("truck3");
    setDisplay(false);
  };
  const btnSave = (e) => {
    e.preventDefault();
    localStorage.setItem("motor", motor);
    localStorage.setItem("mobilB", mobilBensi);
    localStorage.setItem("mobilS", mobilSolar);
    localStorage.setItem("angkot", angkot);
    // localStorage.setItem("pickupB", pickUpB);
    localStorage.setItem("pickupS", pickUpS);
    localStorage.setItem("busK", busK);
    localStorage.setItem("busB", busB);
    localStorage.setItem("truck2", truck2);
    localStorage.setItem("truck3", truck3);
    setMotor(localStorage.getItem("motor"));
    setMobillBensi(localStorage.getItem("mobilB"));
    setMobilSolar(localStorage.getItem("mobilS"));
    setAngkot(localStorage.getItem("angkot"));
    // setPickUpB(localStorage.getItem("pickupB"));
    setPickUpS(localStorage.getItem("pickupS"));
    setBusK(localStorage.getItem("busK"));
    setBusB(localStorage.getItem("busB"));
    seTtruck2(localStorage.getItem("truck2"));
    seTtruck3(localStorage.getItem("truck3"));
    setDisplay(true);
  };
  useEffect(() => {
    btnSave;
    btnReset;
  }, []);

  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const today = new Date();
  const tgl = today.getDate();
  const bln = month[today.getMonth()];
  const thn = today.getFullYear();

  return (
    <>
      <h1 className="text-center text-2xl font-bold">Counter Kendaraan</h1>
      <p className="text-center text-2xl">
        {tgl}-{bln}-{thn}
      </p>
      <div className="mt-3 gap-3 mx-10 md:mx-2 ">
        {/* mobil Bensi */}
        <div className="grid grid-cols-4 gap-2">
          <div
            className="bg-green-700  rounded-md cursor-pointer active:bg-green-800  "
            onClick={() => setMobillBensi(mobilBensi + 1)}
          >
            <img src="/img/mobilBensin.png" alt="" />

            <p className="text-center  text-white text-3xl font-bold  ">
              {mobilBensi}
            </p>
          </div>
          {/* mobil Solar */}
          <div
            className="bg-green-700  rounded-md cursor-pointer active:bg-green-800 "
            onClick={() => setMobilSolar(mobilSolar + 1)}
          >
            <img src="/img/mobilSolar.png" alt="" />
            <p className="text-center  text-white text-3xl font-bold mb-2">
              {mobilSolar}
            </p>
          </div>
          {/* angkot */}
          <div
            className="bg-orange-600 rounded-md cursor-pointer active:bg-blue-800 "
            onClick={() => setAngkot(angkot + 1)}
          >
            <img src="/img/angkot.png" alt="" />
            <p className="text-center  text-white text-3xl font-bold mb-2">
              {angkot}
            </p>
          </div>
          {/* pickup Bensi
        <div
          className="bg-red-600 rounded-md cursor-pointer active:bg-red-800"
          onClick={() => setPickUpB(pickUpB + 1)}
        >
          <img src="/img/pickUpBensi.png" alt="" />
          <p className="text-center  text-white text-3xl font-bold mb-2">
            {pickUpB}
          </p>
        </div> */}
          {/* pickup Solar */}
          <div
            className="bg-red-600 rounded-md cursor-pointer active:bg-red-800 "
            onClick={() => setPickUpS(pickUpS + 1)}
          >
            <img src="/img/pickupSolar.png" alt="" />
            <p className="text-center  text-white text-xl font-bold mb-2">
              {pickUpS}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-x-3 mt-3">
          {/* BusKecil */}
          <div
            className="bg-red-900 rounded-md cursor-pointer active:bg-orange-800"
            onClick={() => setBusK(busK + 1)}
          >
            <img src="/img/busKecil.png" alt="" />
            <p className="text-center  text-white text-3xl font-bold mb-2">
              {busK}
            </p>
          </div>
          {/* Bus Besar */}
          <div
            className="bg-red-900 rounded-md cursor-pointer active:bg-orange-800"
            onClick={() => setBusB(busB + 1)}
          >
            <img src="/img/busBesar.png" alt="" />
            <p className="text-center   text-white text-3xl font-bold mb-2">
              {busB}
            </p>
          </div>
          {/* Truck  as 2*/}
          <div
            className="bg-yellow-500 rounded-md cursor-pointer active:bg-yellow-800"
            onClick={() => seTtruck2(truck2 + 1)}
          >
            <img src="/img/truck2.png" alt="" className="mt-7" />
            <p className="text-center  text-white text-3xl font-bold mb-2">
              {truck2}
            </p>
          </div>
          {/* Truck  as 3*/}
          <div
            className="bg-yellow-500 rounded-md cursor-pointer active:bg-yellow-800 "
            onClick={() => seTtruck3(truck3 + 1)}
          >
            <img src="/img/truck3.png" alt="" className="mt-9" />
            <p className="text-center  text-white text-3xl font-bold mb-2">
              {truck3}
            </p>
          </div>
          {/* motor */}
          <div
            className="bg-stone-700 rounded-md cursor-pointer active:bg-blue-800 items-center"
            onClick={() => setMotor(motor + 1)}
          >
            <img src="/img/motor.png" alt="" />
            <p className="text-center  text-white text-3xl font-bold mb-2">
              {motor}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 my-3 justify-center">
        <p
          onClick={btnReset}
          className="py-2 px-6  bg-indigo-600 text-white font-bold items-center cursor-pointer active:bg-indigo-700 rounded-md"
        >
          RESET
        </p>
        <p
          onClick={btnSave}
          className="py-2 px-6 bg-green-600 text-white font-bold items-center cursor-pointer active:bg-green-700 rounded-md"
        >
          SAVE
        </p>
      </div>
      <hr className="border-2 border-black" />
      <div className="text-center p-2 bg-black w-1/2 mx-auto my-3 rounded-full">
        <a
          className="ml-3 text-3xl font-bold text-white my-2 "
          href="https://forms.gle/ZY1tWDoUxFakJo8b6"
          target="_blank"
        >
          LINK PENGUMPULAN
        </a>
      </div>
      {display && (
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-cecnter text-sm font-light text-surface text-black ">
                  <thead class="border-b  font-medium border-gray-900 text-center">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Mobil Bensin
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Mobil Solar
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Angkot
                      </th>
                      {/* <th scope="col" class="px-6 py-4">
                        Pick Up Bensin
                      </th> */}
                      <th scope="col" class="px-6 py-4">
                        Pick Up Solar
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Bus Kecil
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Bus Besar
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Truk 2 AS
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Truk 3 AS
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Sepeda Motor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b  border-gray-900 text-center">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {mobilBensi}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {mobilSolar}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {angkot}
                      </td>
                      {/* <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {pickUpB}
                      </td> */}
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {pickUpS}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {busK}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {busB}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {truck2}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {truck3}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {motor}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
