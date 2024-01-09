import React from "react";
import "../../dashboard/piecharts/piecharts.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { IoMdArrowDropdown } from "react-icons/io";
const Piecharts = () => {
  return (
    <div className="piecharts">
      <h4>How do I compare to my peers?</h4>
      <p>The number represent current goal acheivement.</p>

      <div className="chartWrapper">
        <div className="dropDownList">
          <div className="age">
            Age : Under 30 <IoMdArrowDropdown />
          </div>
          <div className="age">
          Salary : 20k - 30k <IoMdArrowDropdown />
          </div>
          <div className="age">
          Gender : Male <IoMdArrowDropdown />
          </div>
        </div>

        <div className="graphs">
          <div className="graph">
            <CircularProgressbar value={78} strokeWidth={13}   text="78%" styles={buildStyles({
                pathColor : "#23d6ab"
            })}/>
          </div>
          <div className="graph">
            <CircularProgressbar value={90} strokeWidth={13}  text="95%" styles={buildStyles({
                pathColor : "#23d6ab"
            })} />
          </div>
          <div className="graph">
            <CircularProgressbar value={59} strokeWidth={13}  text="59%" styles={buildStyles({
                pathColor : "#23d6ab"
            })} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piecharts;
