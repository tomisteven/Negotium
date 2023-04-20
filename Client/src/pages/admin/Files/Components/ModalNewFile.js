import React from "react";
import { Button, Modal, Form, Input, Select } from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import { Files } from "../../../../api/file";

const fileController = new Files();
export default function ModalNewFile({ open, setOpen, onReload }) {
  const [fileData, setFileData] = React.useState({});
  const [load, setLoad] = React.useState(false);

    const { accesToken } = useAuth();

  const createService =async () => {
    const response = await fileController.createFile(fileData, accesToken);
    console.log(response);
  }




  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        size="small"
        closeIcon
      >
        <Modal.Header>Guardar Archivo Nuevo:</Modal.Header>
        <Modal.Content>
          <Form onSubmit={{}}>
            <Form.Group widths="equal">
            <Form.Field>
              <label>Nombre</label>
              <Input
                placeholder="Nombre"
                type="text"
                onChange={(e) => {
                    setFileData({
                        ...fileData,
                        nombre: e.target.value
                    })
                }
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Archivo</label>
              <Input
                placeholder="Archivo"
                type="file"
                value={fileData.url}
                onChange={(e) => {
                    setFileData({
                        ...fileData,
                        url: e.target.value
                    })
                }
                }
              />
            </Form.Field>
            </Form.Group>
                <Form.Group widths="equal">
                <Form.Field>
                <label>Tipo</label>
                <Select placeholder="Tipo" options={[
                    {key: "1", value: "PDF", text: "PDF"},
                    {key: "2", value: "IMG", text: "IMG"}
                ]}
                onChange={(e, data) => {
                    setFileData({
                        ...fileData,
                        tipo: data.value
                    })
                }}
                />
                </Form.Field>
                <Form.Field>
                <label>De:</label>
                <Input placeholder="Cliente - Proveedor - Factura - Comprobante" type="text"
                value={fileData.servicio}
                onChange={(e) => {
                    setFileData({
                        ...fileData,
                        servicio: e.target.value
                    })
                }}
                />
                </Form.Field>
                </Form.Group>
                <Form.Field>
                <label>Descripcion</label>
                <Input
                    placeholder="Descripcion"
                    value={fileData.descripcion}
                    onChange={(e) => {
                        setFileData({
                            ...fileData,
                            descripcion: e.target.value
                        })
                    }}
                />
                </Form.Field>
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button color="red" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button
            color="green"
            onClick={() => {
                createService();
                setOpen(false);

            }}
          >
            {
                load ? "Creando..." : "Crear"
            }
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}
