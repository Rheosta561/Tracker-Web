import React, { useState } from "react";
import bg from "./assets/bg.jpg";
import logo from "./assets/logo.png";
import leaf from "./assets/leaf.png";
import axios from "axios";
import Loading from "./Loading";

function Calories() {
  const [formData, setFormData] = useState({
    Gender: "",
    Age: "",
    Height: "",
    Weight: "",
    Duration: "",
    Heart_Rate: "",
    Body_Temp: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://tracker-machine-learning.onrender.com/predict", {
        ...formData,
        Gender: parseInt(formData.Gender),
        Age: parseInt(formData.Age),
        Height: parseInt(formData.Height),
        Weight: parseInt(formData.Weight),
        Duration: parseInt(formData.Duration),
        Heart_Rate: parseInt(formData.Heart_Rate),
        Body_Temp: parseFloat(formData.Body_Temp)
      });

      setResult({
        calories: response.data.calories_prediction,
        message: response.data.message
      });
    } catch (error) {
      console.error("Error posting data", error);
      setResult({ error: "Something went wrong. Try again!" });
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="text-white bg-zinc-950 h-screen w-screen relative ">
      <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover " />
      <div className="relative h-full w-full md:w-2/3 mx-auto px-10  p-4 flex flex-col items-center">
        <div className="flex h-14 w-fit justify-center items-end mt-20">
          <img src={leaf} alt="" className="h-full " />
          <div className="h-full flex items-end pb-1 font-medium text-2xl ">
            Tracker
          </div>
        </div>

        <br />

        {/* Conditional Rendering */}
        {loading ? (
          <div className="w-full mt-10 h-fit p-6 text-center text-lg font-semibold">
            <Loading/>
          </div>
        ) : result ? (
          <div className="w-full mt-32 h-fit p-6 text-center space-y-3">
            {result.error ? (
              <p className="text-red-400">{result.error}</p>
            ) : (
              <>
                <p className="text-xl font-semibold">
                  Calories Burnt: <span className="text-green-400">{result.calories}</span> 
                </p>
                <p className="text-sm text-zinc-300">{result.message}</p>
              </>
            )}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full bg-[#504f4f84] h-fit p-3 space-y-3"
          >
            <input
              type="number"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              className="w-full h-14 text-center text-white bg-[#00000065]"
              placeholder="Enter Gender (0 for Male, 1 for Female)"
            />
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              className="w-full h-14 text-center text-white bg-[#00000065]"
              placeholder="Enter your Age"
            />
            <input
              type="number"
              name="Height"
              value={formData.Height}
              onChange={handleChange}
              className="w-full h-14 text-center text-white bg-[#00000065]"
              placeholder="Enter your Height"
            />
            <input
              type="number"
              name="Weight"
              value={formData.Weight}
              onChange={handleChange}
              className="w-full h-14 text-center text-white bg-[#00000065]"
              placeholder="Enter your Weight"
            />
            <input
              type="number"
              name="Duration"
              value={formData.Duration}
              onChange={handleChange}
              className="w-full h-14 text-center text-white bg-[#00000065]"
              placeholder="Enter Duration of Activity"
            />
            <input
              type="number"
              name="Heart_Rate"
              value={formData.Heart_Rate}
              onChange={handleChange}
              className="w-full h-14 text-center text-white bg-[#00000065]"
              placeholder="Enter Heart Rate"
            />
            <input
              type="number"
              step="0.1"
              name="Body_Temp"
              value={formData.Body_Temp}
              onChange={handleChange}
              className="w-full h-14 text-center text-white bg-[#00000065]"
              placeholder="Enter Body Temperature"
            />

            <button
              type="submit"
              className="text-zinc-950 w-full mt-2 rounded-lg hover:bg-zinc-900 hover:text-white transition-all text-sm font-bold bg-white p-4"
            >
              Check how many Calories you Burnt
            </button>
          </form>
        )}

        <div className="flex justify-center fixed bottom-10 items-center  h-10 mt-5">
          <p className="text-sm font-medium">Powered By</p>
          <img src={logo} alt="" className="h-full " />
        </div>
      </div>
    </div>
  );
}

export default Calories;
