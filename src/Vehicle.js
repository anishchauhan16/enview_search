import React, { useState } from "react";
import noti_off from "./noti_off.png";
import JSONDATA from "./Data.json";
import "./Vehicle.css";

function Vehicle() { 
  const [searchVeh, setSearchVeh] = useState("");           //FUNCTION FOR SEARCHING IN THE VEHICLE SPECIFIC SEARCH BAR
  const click = () => {                                      //FUNCTION WHICH DISPLAYS AN ALERT ON CLICKING THE BUTTON 
    alert("this is a false alarm");
  };
  return (
    <div class="veh">
      <input                                                //INPUT FOR THE VEHICLE SEARCH BAR
        type="text"
        placeholder="Vehicle #"
        onChange={(event) => setSearchVeh(event.target.value)}
      />
      {JSONDATA.filter((val) => {                            //FUNCTION RESPONSIBLE FOR FILTERING SPECIFIED DATA
        if (setSearchVeh != true) {
          if (searchVeh == "") {
            return null;
          } else if (
            val.vehicle_friendly_name
              .toLowerCase()
              .includes(searchVeh.toLowerCase())
          ) {
            return val;
          }
        }
      }).map((val, key) => {                                  //FUNCTION RESPONSIBLE FOR MAPPING THE FILTERED DATA AND SHOWING OUTPUT
        var day = new Date(val.timestamp);
        const month = day.toLocaleString("default", { month: "long" });
        return (
          <div className="type2">
            <div>
              <font size="5">                                          {/*DIV FOR DISPLAYING ALERT TYPE*/}
                <b>{val.alert_type}</b>
              </font>
              <div> 
                <b>{"Driver : "}</b>                                   {/*DIV TO DISPLAY THE DETAILS OF THE DRIVER*/}
                {val.driver_friendly_name}
                {" / "}
                {val.vehicle_friendly_name}
              </div>
            </div>
            <div className="date">                                     {/*DIV FOR SETTING THE DATE*/}
              {"Date : "}
              {day.getDate()} {month} {day.getFullYear()}
              {" at "}
              {day.getHours()}
              {":"}
              {day.getMinutes()}
            </div>
            <div>
              <button                                              //BUTTON FOR SETTING THE FALSE ALARM ALERT
                type="button"
                icon="notifications_off"
                className="button"
                onClick={click}
              >
                <img src={noti_off} alt="noti_off" className="image" />
                {"Mark as False Alarm"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Vehicle;
