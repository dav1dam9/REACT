import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import ClienteService from "../../Services/ClienteService";

function ClienteTable() {
   
    const [clientes, setClientes] = useState([]);

   
    const [visible, setVisible] = useState(false);

    
    const [cliente, setCliente] = useState({
        nombres: '',
        apellidos: '',
        email: ''
    });

    
    const cargarClientes = () => {
        ClienteService.listarClientes()
            .then((response) => {
                setClientes(response.data);
            })
            .catch((error) => {
                console.log("Error al cargar clientes:", error);
            });
    };

    
    useEffect(() => {
        cargarClientes();
    }, []);

    
    const handleChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    };

   
    const guardarCliente = () => {
        ClienteService.guardarCliente(cliente)
            .then(() => {
                setVisible(false); 
                setCliente({ nombres: '', apellidos: '', email: '' }); 
                cargarClientes(); 
            })
            .catch((error) => {
                console.log("Error al guardar cliente:", error);
            });
    };

    return (
        <div className="card">
           
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2>Listado de Clientes</h2>
                <Button label="Insertar Cliente" icon="pi pi-plus" onClick={() => setVisible(true)} />
            </div>

           
            <DataTable value={clientes} stripedRows paginator rows={5} emptyMessage="No existen clientes registrados">
                <Column field="idCliente" header="Código" />
                <Column field="nombres" header="Nombres" />
                <Column field="apellidos" header="Apellidos" />
                <Column field="email" header="Correo" />
            </DataTable>

            
            <Dialog header="Registrar Nuevo Cliente" visible={visible} style={{ width: '350px' }} onHide={() => setVisible(false)}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                    <InputText name="nombres" placeholder="Nombres" value={cliente.nombres} onChange={handleChange} />
                    <InputText name="apellidos" placeholder="Apellidos" value={cliente.apellidos} onChange={handleChange} />
                    <InputText name="email" placeholder="Correo Electrónico" value={cliente.email} onChange={handleChange} />

                    <Button label="Enviar" icon="pi pi-check" onClick={guardarCliente} />
                </div>
            </Dialog>
        </div>
    );
}

export default ClienteTable;