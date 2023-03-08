import React, { useState } from "react";
import "./DateRange.css";
import noti_off from "./noti_off.png";
import data from "./Data.json";

function DateRange() {
  const click = () => {                                           //FUNCTION WHICH DISPLAYS AN ALERT ON CLICKING THE BUTTON 
    alert("this is a false alarm");
  };

  const [sVal, setSVal] = useState("");                         
  const [eVal, setEVal] = useState("");          

  const schange = (event) => {                                    //FUNCTION TO SET THE STARTING DATE OF RANGE BY USER
    setSVal(event.target.value);
  };
  const echange = (event) => {                                     //FUNCTION TO SET THE ENDING DATE OF RANGE BY USER  
    setEVal(event.target.value);
  };

  return (
    <div>
      <div className="datebox">
        Date range from{" "}
        <font size="5">
          <input type={"date"} id="startDate" onChange={schange} value={sVal} />         {/*INPUT FOR START DATE OF RANGE*/}
        </font>{" "}
        to{" "}
        <font size="5">
          <input type={"date"} id="endDate" onChange={echange} value={eVal} />           {/*INPUT FOR END DATE OF RANGE*/}
        </font>
      </div>
      {data
        .filter((val) => {                                                    //FUNCTION RESPONSIBLE FOR FILTERING SPECIFIED DATE RANGE
          var sYear = new Date(sVal).getFullYear();
          var eYear = new Date(eVal).getFullYear();
          var cYear = new Date(val.timestamp).getFullYear();
          var sMonth = new Date(sVal).getMonth();
          var sDay = new Date(sVal).getDate();
          var eMonth = new Date(eVal).getMonth();
          var eDay = new Date(eVal).getDate();
          var cMonth = new Date(val.timestamp).getMonth();
          var cDay = new Date(val.timestamp).getDate();

          if (sYear < cYear && eYear > cYear) {
            return val;
          } else if (sYear == cYear && eYear == cYear) {
            if (sMonth == cMonth && eMonth == cMonth) {
              if (sDay <= cDay && eDay >= cDay) {
                return val;
              }
            } else if (sMonth == cMonth && eMonth > cMonth) {
              if (sDay <= cDay) {
                return val;
              }
            } else if (sMonth < cMonth && eMonth == cMonth) {
              if (eDay >= cDay) {
                return val;
              }
            } else if (sMonth < cMonth && eMonth > cMonth) {
              return val;
            }
          } else if (sYear == cYear && eYear > cYear) {
            if (sMonth < cMonth) {
              return val;
            } else if (sMonth == cMonth) {
              if (sDay <= cDay) {
                return val;
              }
            }
          } else if (sYear < cYear && eYear == cYear) {
            if (eMonth > cMonth) {
              return val;
            } else if (eMonth == cMonth) {
              if (eDay >= cDay) {
                return val;
              }
            }
          }
        })
        .map((val, key) => {                                            //FUNCTION RESPONSIBLE FOR MAPPING THE FILTERED DATA AND SHOWING OUTPUT
          var day = new Date(val.timestamp);
          const month = day.toLocaleString("default", { month: "long" });
          return (
            <div className="type1">                                   {/*DIV FOR DISPLAYING ALERT TYPE*/}
              <div>
                <font size="5">
                  <b>{val.alert_type}</b>
                </font>
                <div>
                  <b>{"Driver : "}</b>                                 {/*DIV TO DISPLAY THE DETAILS OF THE DRIVER*/}
                  {val.driver_friendly_name}
                  {" / "}
                  {val.vehicle_friendly_name}
                </div>
              </div> 
              <div className="date">                                   {/*DIV FOR SETTING THE DATE*/}
                {"Date : "}
                {day.getDate()} {month} {day.getFullYear()}
                {" at "}
                {day.getHours()}
                {":"}
                {day.getMinutes()}
              </div>
              <div>
                <button
                  type="button"                                        //BUTTON FOR SETTING THE FALSE ALARM ALERT
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

export default DateRange;
