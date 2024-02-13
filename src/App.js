import "./App.css";
import Table from "./Components/Content/Table";
import Navbar from "./Components/Header/Navbar";
import TabMenu from "./Components/Product/TabMenu";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <TabMenu></TabMenu>
      <Table></Table>
    </>
  );
}

export default App;
