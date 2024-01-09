import { IoIosArrowForward } from "react-icons/io";
const data = [
  {
    id: 1,
    name: "Employee Contribution",
    percentValues: 70,
  },
  {
    id: 2,
    name: "Retirement Age",
    percentValues: 40,
  },
  {
    id: 3,
    name: "Employer Contribution",
    percentValues: 60,
  },
  {
    id: 4,
    name: "Interest Rate",
    percentValues: 80,
  },
  {
    id: 5,
    name: "Others",
    percentValues: 20,
  },
];

const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Retirement Strategy</h4>
      </div>
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues}%
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <button>Update</button>
      <div className="link"> View Help Docs <IoIosArrowForward /></div>

      <div className="Otherlinks">
       <p>Are you considiring a</p>
       <a>House Advance</a>
       <p className="desc">Limited time reduced interest.</p>
       <div className="learn">
        Learn More <IoIosArrowForward/>
       </div>
      </div>
    </div>
  );
};

export default AreaProgressChart;
