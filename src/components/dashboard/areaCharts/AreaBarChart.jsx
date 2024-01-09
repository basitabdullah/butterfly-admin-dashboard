import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaArrowUpLong } from "react-icons/fa6";
import "./AreaCharts.scss";
import Piecharts from "../piecharts/Piecharts";

const data = [
  {
    value: 20,
    employer: 200,
    employee: 200,
    interest: 200,
  },
  {
    value: "",
    employer: 300,
    employee: 300,
    interest: 300,
  },
  {
    value: 25,
    employer: 400,
    employee: 400,
    interest: 400,
  },
  {
    value: "",
    employer: 500,
    employee: 500,
    interest: 500,
  },
  {
    value: 30,
    employer: 600,
    employee: 600,
    interest: 600,
  },
  {
    value: "",
    employer: 700,
    employee: 700,
    interest: 700,
  },

  {
    value: 35,
    employer: 800,
    employee: 800,
    interest: 800,
  },
  {
    value: "",
    employer: 900,
    employee: 900,
    interest: 900,
  },
  {
    value: 40,
    employer: 1000,
    employee: 1000,
    interest: 1000,
  },
  {
    value: "",
    employer: 1100,
    employee: 1100,
    interest: 1100,
  },
  {
    value: 45,
    employer: 1300,
    employee: 1300,
    interest: 1300,
  },
  {
    value: "",
    employer: 1400,
    employee: 1400,
    interest: 1400,
  },
  {
    value: 50,
    employer: 1500,
    employee: 1500,
    interest: 1500,
  },
];

const AreaBarChart = () => {
  const formatTooltipValue = (value) => {
    return `${value}$`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}$`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="retirementDetails">
        <div className="title">
           <p>Retirement Income</p>
          <h1>Starting Year 2056</h1>
        </div>

        <div className="goalsWrapper">
          <div className="goal">
            <h1>$300000</h1>
            <span>My Goal</span>
          </div>
          <div className="goal">
            <h1>59%</h1>
            <span>Goals Achieved</span>
          </div>

          <div className="goal">
            <h1>$300</h1>
            <span>Est. Monthly Income</span>
          </div>

        </div>
      </div>
      <h5 className="bar-chart-title">Contributions Overtime</h5>

      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="value"
              tickSize={0}
              axisLine={false}
              tick={{
                fontSize: 14,
              }}
            />
             
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{}}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              isAnimationActive={false}
              barSize={24}
              dataKey="employee"
              stackId="a"
              fill="#0901a3"
            />
            <Bar
              isAnimationActive={false}
              barSize={24}
              dataKey="employer"
              stackId="a"
              fill="#4835fe"
            />

            <Bar
              ctiveBar={false}
              isAnimationActive={false}
              barSize={24}
              dataKey="interest"
              stackId="a"
              fill="#85afff"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Piecharts/>
    </div>
  );
};

export default AreaBarChart;
