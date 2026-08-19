import { Toolbar } from "primereact/toolbar";

function Header() {
  const leftContent = (
    <div className="flex align-items-center">
      <i
        className="pi pi-users"
        style={{
          fontSize: "2rem",
          color: "#9c9201",
          marginRight: "10px"
        }}
      ></i>
      <h2 style={{ margin: 0 }}>
        Sistema de Gestión de clientes
      </h2>
    </div>
  );

  return (
    <Toolbar
      left={leftContent}
      style={{
        marginBottom: "20px"
      }}
    />
  );
}

export default Header;