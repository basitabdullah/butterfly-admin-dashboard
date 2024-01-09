import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import AccountDetails from "../../components/dashboard/accountDetails/AccountDetails";
import AreaProgressChart from "../../components/dashboard/areaCharts/AreaProgressChart";

const Dashboard = () => {
  return (
    <div className="content-area">
    
      <div className="components">
        <AccountDetails />
        <AreaCharts />
        <AreaProgressChart/>
        
      </div>
 
    </div>
  );
};

export default Dashboard;
