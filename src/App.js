import "./App.css";
import Table from "./Components/Content/Table";
import Navbar from "./Components/Header/Navbar";
import Panel from "./Components/Content/Panel";
import TabMenu from "./Components/Product/TabMenu";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Panel></Panel>
      <TabMenu></TabMenu>
      <Table></Table>
    </>
  );
}

export default App;
