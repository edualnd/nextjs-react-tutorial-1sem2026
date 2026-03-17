"use client";

import { useState } from "react";

export default function ColorChange() {
  const [color, setColor] = useState("bg-white");
  const [theme, setTheme] = useState(false);

  return (
    <div className=" flex flex-col items-center gap-4 bg-gray-500 p-2 rounded-2xl">
      <div className="flex flex-col gap-2 w-30">
        <button
          type="button"
          className={`font-bold rounded-2xl cursor-pointer ${theme ? "bg-white text-black" : "bg-black text-white"}`}
          onClick={() => {
            setTheme(!theme);
          }}
        >
          {theme ? "Light" : "Dark"} mode
        </button>
        <div
          className={`w-full h-20 rounded-2xl p-2 flex justify-center items-center ${color}`}
        ></div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <button
          type="button"
          className={`w-5 h-5 rounded-xl hover:opacity-90 hover:cursor-pointer ${theme ? "bg-green-400" : "bg-green-800"}`}
          onClick={() => {
            if (theme) setColor("bg-green-400");
            else setColor("bg-green-800");
          }}
        ></button>
        <button
          type="button"
          className={`w-5 h-5 rounded-xl hover:opacity-90 hover:cursor-pointer ${theme ? "bg-red-400" : "bg-red-800"}`}
          onClick={() => {
            if (theme) setColor("bg-red-400");
            else setColor("bg-red-800");
          }}
        ></button>
        <button
          type="button"
          className={`w-5 h-5 rounded-xl hover:opacity-90 hover:cursor-pointer ${theme ? "bg-amber-400" : "bg-amber-800"}`}
          onClick={() => {
            if (theme) setColor("bg-amber-400");
            else setColor("bg-amber-800");
          }}
        ></button>
        <button
          type="button"
          className={`w-5 h-5 rounded-xl hover:opacity-90 hover:cursor-pointer ${theme ? "bg-blue-400" : "bg-blue-800"}`}
          onClick={() => {
            if (theme) setColor("bg-blue-400");
            else setColor("bg-blue-800");
          }}
        ></button>
        <button
          type="button"
          className={`w-5 h-5 rounded-xl hover:opacity-90 hover:cursor-pointer ${theme ? "bg-cyan-400" : "bg-cyan-800"}`}
          onClick={() => {
            if (theme) setColor("bg-cyan-400");
            else setColor("bg-cyan-800");
          }}
        ></button>
      </div>
    </div>
  );
}
