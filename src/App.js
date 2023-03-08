import React, { useState } from "react";
import "./App.css";
import noti_off from "./noti_off.png";
import JSONDATA from "./Data.json";
import "./DateRange.js";
import Vehicle from "./Vehicle";
import DateRange from "./DateRange.js";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); //FUNCTION FOR SEARCHING IN THE SEARCH BAR
  const click = () => {                              //FUNCTION WHICH DISPLAYS AN ALERT ON CLICKING THE BUTTON 
    alert("this is a false alarm");
  };

  return (
    <div className="App">               
      <div className="header">
        <input                                       //INPUT FOR THE SEARCH BAR
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Vehicle />                                 {/*VEHICLE SPECIFIC SEARCH BAR (BASED ON vehicle_friendly_name)*/}
        <div className="datebox">
          <DateRange />                             {/*DATE RANGE BASED SEARCH (BASED ON TIMESTAMP)*/}
        </div>
      </div>
      <div className="mid">{"Alerts"}</div>        {/*THE "ALERTS" BAR*/}

      {JSONDATA.filter((val) => {                   //FUNCTION RESPONSIBLE FOR FILTERING SPECIFIED DATA
        if (setSearchTerm != true) {
          if (searchTerm == "") {
            return null;
          } else if (
            val.driver_friendly_name
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.alert_type.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (val.id.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          } else if (
            val.vehicle_id.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.vehicle_friendly_name
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return val;
          } else if (
            val.timestamp.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }
      }).map((val, key) => {                    //FUNCTION RESPONSIBLE FOR MAPPING THE FILTERED DATA AND SHOWING OUTPUT
        var day = new Date(val.timestamp);
        const month = day.toLocaleString("default", { month: "long" });
        return (
          <div className="type">
            <div>
              <font size="5">
                <b>{val.alert_type}</b>                        {/*DIV FOR DISPLAYING ALERT TYPE*/}
              </font> 
              <div>
                <b>{"Driver : "}</b>                            {/*DIV TO DISPLAY THE DETAILS OF THE DRIVER*/}
                {val.driver_friendly_name}
                {" / "}
                {val.vehicle_friendly_name}
              </div>
            </div>
            <div className="date">                             {/*DIV FOR SETTING THE DATE*/}
              {"Date : "}
              {day.getDate()} {month} {day.getFullYear()}
              {" at "}
              {day.getHours()}
              {":"}
              {day.getMinutes()}
            </div>
            <div>
              <button                                       //BUTTON FOR SETTING THE FALSE ALARM ALERT
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

export default App;
