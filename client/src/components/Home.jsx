import React, { useState } from 'react';
function Home() {
  const [power, setPower] = useState("");
  const [current, setCurrent] = useState("");
  const [temperature, setTemperature] = useState("");
  const [answer, setAnswer] = useState(null); 

const handlePredict = async () => {
  if (!power || !current || !temperature) {
    alert("Please fill in all fields");
    return;
  }

  const payload = {
    power: Number(power),
    current: Number(current),
    temperature: Number(temperature),
  };

  try {
    const response = await fetch("http://localhost:8000/api/predict/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();
    setAnswer(result.status);
  } catch (err) {
    console.error(err);
    alert("Failed to fetch prediction");
  }
};




  return (
    <div className="flex text-white w-full h-40 justify-center items-center sticky">
      <p className="text-6xl">
        Motor fault <br /><span className="text-green-600">Detector</span>
      </p>
      <div className="flex-col text-black ml-14">
        <input
          className="gap-10 w-2/3 h-16 rounded-md text-center bg-white"
          type="text"
          placeholder="Power"
          onChange={(e) => setPower(e.target.value)}
        />
        <br />
        <input
          className="gap-10 mt-6 w-2/3 h-16 rounded-md text-center bg-white"
          type="text"
          placeholder="Current"
          onChange={(e) => setCurrent(e.target.value)}
        />
        <br />
        <input
          className="gap-10 mt-6 w-2/3 h-16 rounded-md text-center bg-white"
          type="text"
          placeholder="Temperature"
          onChange={(e) => setTemperature(e.target.value)}
        />
      </div>
      <button
        className="bg-green-600 w-1/6 h-16 rounded-md mr-12"
        type="button"
        onClick={handlePredict}
      >
        Predict
      </button>

      {answer !== null && (
        <h1 className={`text-3xl font-bold text-wrap ${answer==="Fault detected" ? 'text-red-700' : 'text-green-700'}`}>
          {answer==="Fault detected" ? "Fault found" : "Fault not found"}
        </h1>
      )}
    </div>
  );
}

export default Home;
