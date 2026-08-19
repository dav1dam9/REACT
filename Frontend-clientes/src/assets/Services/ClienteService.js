import axios from "axios";

const URL = "http://localhost:8080/clientes";

class ClienteService {

    listarClientes() {
        return axios.get(URL);
    }

    guardarCliente(cliente) {
        return axios.post(URL, cliente);
    }

    actualizarCliente(id, cliente) {
        return axios.put(`${URL}/${id}`, cliente);
    }

    eliminarCliente(id) {
        return axios.delete(`${URL}/${id}`);
    }

    obtenerCliente(id) {
        return axios.get(`${URL}/${id}`);
    }

}

export default new ClienteService();