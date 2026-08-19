import Header from "./assets/Components/Shared/Header";
import ClienteTable from "./assets/Components/Cliente/ClienteTable";

function App() {
  return (
    <div className="card" style={{ padding: "20px" }}>
      <Header />
      <ClienteTable />
    </div>
  );
}

export default App;