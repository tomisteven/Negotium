import React from "react";
import { Table, Header, Image, Button } from "semantic-ui-react";
import img_deuda from "../../../../assets/Negotium Assets/warning.png";
import sin_clientes from "../../../../assets/Negotium Assets/comprobado.png";
import Swal from "sweetalert2";
import { Client } from "../../../../api/client";
import { useAuth } from "../../../../hooks/useAuth";


const clientController = new Client();

export default function TableClients({
  search,
  clients,
  viewClientInModal,
  avatarF,
  avatarM,
  viewModalService,
  viewModalAnularDeuda,
  editCreateClient,
  changeState,
}) {

  const { accesToken } = useAuth();

  const deleteClient = (client) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar este cliente?",
      text: "No podras revertir esta accion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await clientController.deleteClient(client._id, accesToken);
        if (response) {
          Swal.fire("Eliminado!", "El cliente ha sido eliminado", "success");
          changeState();
        } else {
          Swal.fire("Error!", "El cliente no ha sido eliminado", "error");
        }
      }
    });
  };

  return (
    <>
      {
        clients.length > 0 ? (
          <Table basic="very" celled className="table-clients">
      <Table.Header fullWidth className="header-table">
        <Table.Row>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Correo</Table.HeaderCell>
          <Table.HeaderCell>Telefono</Table.HeaderCell>
          <Table.HeaderCell>Gasto</Table.HeaderCell>
          <Table.HeaderCell>Deuda</Table.HeaderCell>
          <Table.HeaderCell className="table-row-center">
            Acciones
          </Table.HeaderCell>
          <Table.HeaderCell>Deuda</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body className="body-table">
        {search.length > 0
          ? search.map((client, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image
                      src={client.genero == "Masculino" ? avatarM : avatarF}
                      rounded
                      size="mini"
                    />
                    <Header.Content className="name-item-list">
                      {client.nombre} {client.apellido}
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{client.email}</Table.Cell>
                <Table.Cell>{client.telefono}</Table.Cell>
                <Table.Cell>${client.gastoTotal}</Table.Cell>
                <Table.Cell>${client.deudaTotal}</Table.Cell>
                <Table.Cell>
                  <Button
                    size="mini"
                    color="green"
                    onClick={() => {
                      viewClientInModal(client);
                    }}
                  >
                    Ver
                  </Button>
                  <Button
                    size="mini"
                    color="primary"
                    onClick={() => {
                      editCreateClient(client);
                    }}
                    className="btn-see"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => {
                      viewModalService(client);
                    }}
                    size="mini"
                    color="orange"
                    className="btn-delete"
                  >
                    + Servicio
                  </Button>
                  <Button
                    onClick={() => {
                      viewModalService(client);
                    }}
                    size="mini"
                    color="instagram"
                    className="btn-delete"
                  >
                    + Servicio Futuro
                  </Button>
                  <Button
                    size="mini"
                    color="youtube"
                    onClick={() => {
                      viewModalAnularDeuda(client);
                    }}
                  >
                    Anular Deuda
                  </Button>
                  <Button
                    size="mini"
                    color="youtube"
                    onClick={() => {
                      deleteClient(client);
                    }}
                    className="btn-delete"
                  >
                    Eliminar
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Image
                    centered
                    src={client.deuda ? img_deuda : ""}
                    rounded
                    size="mini"
                  />
                </Table.Cell>
              </Table.Row>
            ))
          : clients.map((client, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image
                      src={client.genero == "Masculino" ? avatarM : avatarF}
                      rounded
                      size="mini"
                    />
                    <Header.Content className="name-item-list">
                      {client.nombre} {client.apellido}
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{client.email}</Table.Cell>
                <Table.Cell>
                  <span className="span-telefono">+54 </span>
                  {client.telefono}
                </Table.Cell>
                <Table.Cell>${client.gastoTotal}</Table.Cell>
                <Table.Cell
                  className={
                    client.deuda || client.deudaTotal > 0
                      ? "font-item-list-v2"
                      : ""
                  }
                >
                  ${client.deudaTotal}
                </Table.Cell>
                <Table.Cell className="table-row-center">
                  <Button
                    onClick={() => {
                      viewClientInModal(client);
                    }}
                    size="mini"
                    color="green"
                    className="btn-see"
                  >
                    Ver
                  </Button>
                  <Button
                    onClick={() => {
                      viewModalService(client);
                    }}
                    size="mini"
                    color="orange"
                    className="btn-delete"
                  >
                    + Servicio
                  </Button>
                  <Button
                    onClick={() => {
                      viewModalService(client);
                    }}
                    size="mini"
                    color="instagram"
                    className="btn-delete"
                  >
                    + Servicio Futuro
                  </Button>
                  <Button
                    size="mini"
                    color="purple"
                    className="btn-delete"
                    onClick={() => {
                      viewModalAnularDeuda(client);
                    }}
                  >
                    Anular Deuda
                  </Button>
                  <Button
                    size="mini"
                    primary
                    className="btn-see"
                    onClick={() => {
                      editCreateClient(client);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    size="mini"
                    onClick={() => {
                      deleteClient(client);
                    }}
                    color="youtube"
                    className="btn-delete"
                  >
                    Eliminar
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Image
                    centered
                    src={client.deuda ? img_deuda : ""}
                    rounded
                    size="mini"
                  />
                </Table.Cell>
              </Table.Row>
            ))}
      </Table.Body>
    </Table>
        ) : (
          <div className="no-clientes-table">
            <h3>No se encontraron clientes</h3>
            <img className="img_sin_clientes" src={sin_clientes} alt=""/>
          </div>
        )
      }


    </>
  );
}
