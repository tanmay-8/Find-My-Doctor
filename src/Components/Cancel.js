import React, { useContext } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import appointmentContext from "../contexts/appointmentContext";

// for canceling appointment
const Cancel = (props) => {
  const { id } = props;
  const context = useContext(appointmentContext);

  const { cancelAppointment } = context;

  return (
    <div>
      <Popup
        trigger={
          <button className="bg-red-500 text-white p-2 rounded-lg shadow-lg">
            Cancel
          </button>
        }
        modal
      >
        {(close) => (
          <div className="rounded-md p-5 space-y-4">
            <div className="text-center font-semibold text-xl text-red-500">
              Confirmation !
            </div>
            <div className="flex space-x-5 justify-center">
              <button
                className="bg-red-500 rounded-md shadow-md text-white px-3 py-1 text-lg"
                onClick={async () => {
                    console.log(id)
                    const res = await cancelAppointment(id)
                    if(res.success){
                        close();
                    }
                }}
              >
                Confirm
              </button>
              <button
                className="bg-green-500 rounded-md shadow-md text-white px-3 py-1 text-lg"
                onClick={() => {
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Cancel;
