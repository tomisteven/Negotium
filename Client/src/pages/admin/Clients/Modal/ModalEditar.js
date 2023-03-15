import React from "react";
import { Modal, Form, Input, Dropdown, Button } from "semantic-ui-react";
import { Client } from "../../../../api/client";
import { useAuth } from "../../../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";


const clientController = new Client();
export default function ModalEditar({
  modalEditar,
  setModalEditar,
  client,
  changeState,
  editStatus
}) {
  const { accesToken } = useAuth();
  const [cargando, setCargando] = React.useState(false);
  const [formEdit, setFormEdit] = React.useState(client ? client : {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    genero: "",
    deudaTotal: 0,
    gastoTotal: 0,
  });

  //console.log(client);

    const editCreateClient = async () => {
        //console.log(formEdit);
        setCargando(true);

        if (formEdit.nombre == "" || formEdit.apellido == "" || formEdit.email == "" || formEdit.telefono == "" || formEdit.direccion == "") {
            toast.error("Todos los campos son obligatorios");
            setCargando(false);
            return;
        }

        if(editStatus){
            const response = await clientController.updateClient(accesToken, formEdit, client._id);
            if (response) {
                toast.success("Cliente actualizado correctamente");
                setCargando(false);
                setModalEditar(false);
                changeState();
            }
            else{
                toast.error("Error al actualizar el cliente");
            }
        }
        else{
            console.log(formEdit);
            formEdit.deudaTotal > 0 ? formEdit.deuda = true : formEdit.deuda = false;
            const response = await clientController.createClient(accesToken, formEdit);
            if (response) {
                toast.success("Cliente creado correctamente");
                setCargando(false);
                setModalEditar(false);
                changeState();
            }else{
                toast.error("Error al crear el cliente");
            }
        }
    }

  return (
    <>
      <Modal
        size="small"
        open={modalEditar}
        onClose={() => setModalEditar(false)}
        onOpen={() => setModalEditar(true)}
      >
        <Modal.Header>
          Editar datos del cliente: {client.nombre} {client.apellido}{" "}
        </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <Input
                  focus
                  fluid
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  onChange={(e) => {
                    setFormEdit({...formEdit, nombre: e.target.value });
                  }}
                  value={formEdit.nombre || client.nombre}
                  label={{ content: "Nombre" }}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  focus
                  fluid
                  label={{ content: "Apellido" }}
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  onChange={(e) => {
                    setFormEdit({ ...formEdit, apellido: e.target.value });
                  }}
                  value={formEdit.apellido || client.apellido}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <Input
                  focus
                  fluid
                  type="text"
                  name="email"
                  placeholder="Email"
                  label={{ content: "Email" }}
                  onChange={(e) => {
                    setFormEdit({ ...formEdit, email: e.target.value });
                  }}
                  value={formEdit.email || client.email}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  focus
                  fluid
                  type="text"
                  name="telefono"
                  placeholder="Telefono"
                  onChange={(e) => {
                    setFormEdit({ ...formEdit, telefono: e.target.value });
                  }}
                  label={{ icon: "plus", content: "54" }}
                  value={formEdit.telefono || client.telefono}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <Input
                  focus
                  fluid
                  type="number"
                  name="gastoTotal"
                  label={{ icon: "dollar" }}
                  placeholder="Gasto Total Actual"
                  onChange={(e) => {
                    setFormEdit({ ...formEdit, gastoTotal: parseInt(e.target.value)});
                  }}
                  value={formEdit.gastoTotal || client.gastoTotal}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  focus
                  fluid
                  type="text"
                  name="deudaTotal"
                  label={{ icon: "dollar" }}
                  placeholder="Deuda Total"
                  onChange={(e) => {
                    setFormEdit({ ...formEdit, deudaTotal: parseInt(e.target.value) });
                  }}
                  value={formEdit.deudaTotal || client.deudaTotal}
                />
              </Form.Field>
            </Form.Group>

            <Form.Field>
                <Input
                  focus
                  fluid
                  type="text"
                  name="direccion"
                  label={{ content: "Direccion", icon: "home" }}
                  placeholder="Direccion"
                  onChange={(e) => {
                    setFormEdit({ ...formEdit, direccion: e.target.value });
                  }}
                  value={formEdit.direccion || client.direccion}
                />
              </Form.Field>
            <Form.Field>
                <Dropdown
                    placeholder="Genero"
                    fluid
                    selection
                    icon={{ name: "dropdown", color: "blue" }}
                    options={[
                        { key: "1", text: "Femenino", value: "Femenino" },
                        { key: "2", text: "Masculino", value: "Masculino" },
                    ]}
                    onChange={(e, data) => {
                        setFormEdit({ ...formEdit, genero: data.value });
                    }}
                    value={formEdit.genero || client.genero}
                />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setModalEditar(false)}>
            Cancelar
          </Button>
          <Button
            content={cargando ? "Editando..." : editStatus ? "Editar" : "Crear"}
            labelPosition="right"
            icon={cargando ? "spinner" : "edit"}
            positive
            onClick={() => {editCreateClient()}}
          />
        </Modal.Actions>
      </Modal>
      <ToastContainer />
    </>
  );
}
