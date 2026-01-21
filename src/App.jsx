import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import battery from "./assets/battery.png";
import wifi from "./assets/wifi.gif";
import sound from "./assets/button-press.mp3";
import backspaceIcon from "./assets/backspace.png";

export default function Calculator() {
  // Calculation State
  const [result, setResult] = useState("");
  // Sound Constructor
  const clickSound = useRef(new Audio(sound));

  // Function for play sound
  const playSound = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };
  // Sound play on button clicking
  const buttonClick = (e) => {
    const value = e.target.value;
    playSound();
    // Logic for calculation and errors
    if (value === "AC") {
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "BACK") {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + value);
    }
  };
  // Reference for time
  const timeDisplay = useRef(null);
  // Update time current time
  const updateTime = () => {
    if (!timeDisplay.current) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    timeDisplay.current.textContent = `${hours}:${minutes}:${seconds}`;
  };
  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-[#4B164C] text-white overflow-hidden relative">
      {/* ANIMATE BACKGROUND CIRCLES */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="anim absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-linear-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="anim absolute top-10 right-1/3 w-80 h-80 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 animate-bounce delay-1000"></div>
        <div className="anim absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-linear-to-r from-emerald-500/10 to-teal-500/10 animate-spin-slow"></div>
        <div className="anim absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-linear-to-r from-orange-500/10 to-yellow-500/10 animate-ping delay-700"></div>
        <div className="anim absolute top-1/2 left-10 w-60 h-60 rounded-full bg-linear-to-r from-rose-500/10 to-red-500/10 animate-pulse delay-500"></div>
        <div className="anim absolute top-20 right-20 w-40 h-40 rounded-full bg-linear-to-r from-violet-500/10 to-indigo-500/10 animate-bounce delay-300"></div>
      </div>
      <header
        className="status-bar fixed top-0 left-0 right-0 z-50 
  bg-[#F8E7F6]/30 backdrop-blur-lg 
  py-2 px-3 sm:px-6 lg:px-60 
  flex items-center justify-between gap-2 
  border-b border-white/10"
      >
        <span
          ref={timeDisplay}
          className="font-bold text-[#F8E7F6] 
    text-xs sm:text-sm md:text-base 
    whitespace-nowrap"
        >
          00:00:00
        </span>

        <span
          className="font-medium lg:font-bold lg:text-[18px] text-[#F8E7F6]/80 
    text-[14px] sm:text-sm md:text-sm 
    text-center leading-tight 
    max-w-\[140px\] sm:max-w-none"
        >
          Developed by Aeiman Fayyaz
        </span>
        <div className="icons flex items-center gap-1.5 sm:gap-3 shrink-0">
          <img src={wifi} alt="wifi" className="w-10 sm:w-5 md:w-7 h-7" />
          <img
            src={battery}
            alt="battery"
            className="w-7 sm:w-5 md:w-7 h-7 mt-2"
          />
        </div>
      </header>

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/5 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Quick<span className="text-[#DD88CF]">Calc</span>
              </h1>
              <p className="text-2xl font-light text-gray-300 mb-8">
                Premium Scientific Calculator
              </p>

              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-6 text-[#DD88CF]">
                  About
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  QuickCalc is a state-of-the-art calculator with a premium
                  interface designed for professionals, students, and anyone who
                  values both aesthetics and functionality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DD88CF] rounded-full mr-3"></div>
                    <span>Advanced mathematical operations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DD88CF] rounded-full mr-3"></div>
                    <span>Premium sound feedback on every press</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DD88CF] rounded-full mr-3"></div>
                    <span>
                      Animated visual elements for enhanced experience
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#DD88CF] rounded-full mr-3"></div>
                    <span>Responsive design for all devices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-linear-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
                <p className="text-gray-300">
                  Use the percentage button (%) for quick percentage
                  calculations. The backspace button allows you to correct
                  mistakes easily. All operations follow standard mathematical
                  order.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Recent Updates</h3>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-300 border border-cyan-500/30 cursor-pointer animate-pulse">
                  UI Enhanced
                </span>
                <span className="px-4 py-2 bg-purple-900/30 rounded-full text-purple-300 border border-purple-500/30 cursor-pointer animate-pulse">
                  Sound Added
                </span>
                <span className="px-4 py-2 bg-emerald-900/30 rounded-full text-emerald-300 border border-emerald-500/30 cursor-pointer animate-pulse">
                  Animations
                </span>
              </div>
            </div>
          </div>

          {/* CALCULATOR UI */}
          <div className="lg:w-3/5 flex flex-col items-center lg:items-end">
            <div className="calculator-container w-full max-w-lg">
              <div className="display-container mb-8">
                <div className="text-right mb-2">
                  <span className="text-gray-400 text-sm">Expression</span>
                </div>
                <input
                  className="display w-full bg-linear-to-r from-gray-900 to-black text-right text-4xl font-light py-6 px-6 rounded-2xl border border-white/10 shadow-2xl focus:outline-none"
                  type="text"
                  value={result || "0"}
                  disabled
                />
              </div>
              {/* BUTTONS START */}
              <div className="buttons grid grid-cols-4 gap-4">
                <button
                  className="operator bg-linear-to-br from-rose-600 to-rose-800 hover:from-rose-700 hover:to-rose-900 text-white py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95 shadow-lg"
                  value="AC"
                  onClick={buttonClick}
                >
                  AC
                </button>
                <button
                  className="operator bg-linear-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="%"
                  onClick={buttonClick}
                >
                  %
                </button>
                <button
                  className="operator bg-linear-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="/"
                  onClick={buttonClick}
                >
                  ÷
                </button>
                <button
                  className="operator bg-linear-to-br from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="*"
                  onClick={buttonClick}
                >
                  ×
                </button>

                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="7"
                  onClick={buttonClick}
                >
                  7
                </button>
                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="8"
                  onClick={buttonClick}
                >
                  8
                </button>
                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="9"
                  onClick={buttonClick}
                >
                  9
                </button>
                <button
                  className="operator bg-linear-to-br from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="-"
                  onClick={buttonClick}
                >
                  −
                </button>

                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="4"
                  onClick={buttonClick}
                >
                  4
                </button>
                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="5"
                  onClick={buttonClick}
                >
                  5
                </button>
                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="6"
                  onClick={buttonClick}
                >
                  6
                </button>
                <button
                  className="operator bg-linear-to-br from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="+"
                  onClick={buttonClick}
                >
                  +
                </button>

                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="1"
                  onClick={buttonClick}
                >
                  1
                </button>
                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="2"
                  onClick={buttonClick}
                >
                  2
                </button>
                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="3"
                  onClick={buttonClick}
                >
                  3
                </button>
                <button
                  className="equal bg-linear-to-br from-cyan-600 to-cyan-800 hover:from-cyan-700 hover:to-cyan-900 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95 row-span-2"
                  value="="
                  onClick={buttonClick}
                >
                  =
                </button>

                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95 col-span-2"
                  value="0"
                  onClick={buttonClick}
                >
                  0
                </button>
                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95"
                  value="00"
                  onClick={buttonClick}
                >
                  00
                </button>
                <button
                  className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 py-5 rounded-xl text-xl font-bolder transition-all duration-200 active:scale-95"
                  value="."
                  onClick={buttonClick}
                >
                  .
                </button>
                <button
                  className="bg-linear-to-br from-gray-500 to-gray-900 hover:from-gray-600 hover:to-gray-800 py-5 rounded-xl text-xl font-medium transition-all duration-200 active:scale-95 flex items-center justify-center"
                  value="BACK"
                  onClick={buttonClick}
                >
                  <img
                    src={backspaceIcon}
                    alt="backspace"
                    className="w-6 h-6"
                  />
                </button>
              </div>
              {/* BUTTONS END */}
              <div className="mt-10 text-center text-gray-400">
                <p>Premium Calculator • Build with React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER SECTION START */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-lg py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">
                Quick<span className="text-[#DD88CF]">Calc</span>
              </h3>
              <p className="text-gray-400">The premium calculator experience</p>
            </div>
            <div className="flex gap-8">
              <div>
                <h4 className="font-bold mb-2">Features</h4>
                <ul className="text-gray-400 space-y-1">
                  <li className="cursor-pointer hover:text-[#DD88CF]">Premium UI</li>
                  <li className="cursor-pointer hover:text-[#DD88CF]">Sound Feedback</li>
                  <li className="cursor-pointer hover:text-[#DD88CF]">Animated Elements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Operations</h4>
                <ul className="text-gray-400 space-y-1">
                  <li className="cursor-pointer hover:text-[#DD88CF]">Basic Arithmetic</li>
                  <li className="cursor-pointer hover:text-[#DD88CF]">Percentage</li>
                  <li className="cursor-pointer hover:text-[#DD88CF]">Decimal Support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-white/10 text-gray-500">
            <p>
              © 2026 QuickCalc Premium. All calculations performed locally in
              your browser.
            </p>
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION END */}
    </div>
  );
}
