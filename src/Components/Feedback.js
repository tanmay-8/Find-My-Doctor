import React, { useContext, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import closeImg from "../Images/close.png";
import rateContext from "../contexts/rateContext";

// Giving feedback
const Feedback = (props) => {
  const { doctor } = props;

  const [details, setDetails] = useState({
    rating: null,
    desc: "",
    doctor: doctor,
  });

  const context = useContext(rateContext);
  const { addRating } = context;

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Popup
        trigger={
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg">
            Feedback
          </button>
        }
        modal
      >
        {(close) => (
          <div className=" bg-white relative rounded-lg p-8 flex flex-col  md:mt-0">
            <img
              src={closeImg}
              className="absolute top-2 right-2 h-6 w-6 cursor-pointer"
              onClick={() => {
                close();
              }}
            ></img>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const res = await addRating(details);
                if(res.success){
                  close();
                }else{
                  document.getElementById("alert").innerHTML = "Some error occured"
                }
              }}
            >
              <div className="relative mb-4">
                <label
                  htmlFor="rating"
                  className="leading-7 text-sm text-gray-600"
                >
                  Rating
                </label>
                <input
                  onChange={onChange}
                  required={true}
                  type="number"
                  minLength={1}
                  min={0}
                  max={5}
                  id="rating"
                  name="rating"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="desc"
                  className="leading-7 text-sm text-gray-600"
                >
                  Your experience
                </label>
                <textarea
                  id="desc"
                  name="desc"
                  onChange={onChange}
                  required={true}
                  minLength={10}
                  maxLength={300}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="flex p-1 space-x-2 justify-center">
                <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </form>
            <div>
              <p
                id="alert"
                className="h-5 text-sm text-red-600 text-center"
              ></p>
            </div>
            <p className="text-sm text-center text-gray-500 mt-3">
              Thanks for using our service !
            </p>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Feedback;
