import React from 'react'
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import facebook from "../Images/facebook.png";

const Footer = () => {
  return (
    <div>
      <div className=" bg-blue-700 p-5">
        <div className="text-white">
          <div className="mx-auto font-head">
            <p className="text-center p-1">Contact us : support@gmail.com</p>

            <div className="p-1 text-center  text-lg space-y-1">
              <div className="flex space-x-4 p-1 justify-center items-center">
                <p className="">Follow us on :</p>
                <img
                  alt="logo"
                  src={instagram}
                  className="w-4 cursor-pointer invert"
                ></img>
                <img
                  alt="logo"
                  src={facebook}
                  className="w-4 cursor-pointer invert"
                ></img>
                <img
                  alt="logo"
                  src={twitter}
                  className="w-4 cursor-pointer invert"
                ></img>
              </div>
            </div>
            <div className="w-full text-center p-1 flex justify-center items-center space-x-1 md:space-x-2 ">
              <p>
                © {new Date().getFullYear()} Copyright : Find My Doctor | All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
