import React from "react";
import info from "../Images/info.png";
import diseases from "../Data/diseases";
import Popup from "reactjs-popup";

const BeforeSearch = (props) => {
  // getting setquery function from parent
  const { setQuery } = props;

  // checking if disease card is at edge to show popups correctly
  const isEndf = (index) => {
    let width = window.innerWidth;
    if (width <= 640) {
      if (index % 2 === 1) {
        return true;
      }
    } else if (width > 640 && width < 800) {
      if (
        index === 2 ||
        index === 5 ||
        index === 8 ||
        index === 11 ||
        index === 14
      ) {
        return true;
      }
    } else if (width >= 800 && width < 1048) {
      if (index === 3 || index === 7 || index === 11) {
        return true;
      }
    } else {
      if (index === 5 || index === 11) {
        return true;
      }
    }
    return false;
  };

  const search = (query) => {
    setQuery(query);
  };

  return (
    <div
      className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
                gap-5 justify-center transition-all"
    >
      {diseases.map((disease) => {
        let index = diseases.indexOf(disease);
        let isEnd = isEndf(index);

        return (
          <div
            key={index}
            className="rounded-xl border h-32 shadow-md space-y-1 hover:scale-110 transition-all "
          >
            <Popup
              trigger={
                <img
                  src={info}
                  alt="info"
                  id="infoB"
                  className="h-4  cursor-pointer m-1"
                ></img>
              }
              position={isEnd ? "left center" : "right center"}
            >
              <p className="text-center text-sm">{disease.desc}</p>
            </Popup>
            <div
              onClick={() => search(disease.title)}
              className="w-full flex justify-center p-2 h-1/2 cursor-pointer"
            >
              <img
                src={disease.img}
                className="h-full"
                alt={disease.title}
              ></img>
            </div>
            <p className="text-center">{disease.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BeforeSearch;
