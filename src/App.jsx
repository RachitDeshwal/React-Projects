import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0213456789";
    if (characterAllowed) str += "@#%&$!*^@#%&$!*^";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);
  let copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  });

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8   text-orange-500 bg-gray-700">
        <h1 className="text-white text-center  my-3 p-2  text-3xl">
          Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="w-full outline-none py-3 px-1 bg-white rounded-lg  "
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 text-white rounded-lg p-2 mx-1 hover:bg-blue-500"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={8}
              max={15}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
