import "./App.css";
import MenuAppBar from "./_component/AppBar/MenuAppBar";
import SearchBox from "./_component/SearchBox/SearchBox";
import InfoBox from "./_component/InfoBox/InfoBox";
import Drawer from "./_component/Drawer/Drawer";
import Table from "./_component/Table/Table";
import DataTable from "./_component/DataTable";

function App() {
  return (
    <div>
      <MenuAppBar />
      <div className="description">
        <SearchBox />
        <InfoBox />
      </div>
      <br />
      <div className="data">
        <Drawer />
        <DataTable />
      </div>
    </div>
  );
}

export default App;
